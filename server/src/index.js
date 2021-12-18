//Importing required configs & packages:

const express = require("express");
const app = express();

const cors = require("cors");
const { body } = require("express-validator");

const googlePassport = require("./configs/google.passport");
const fbPassport = require("./configs/facebook.passport");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.options("*", cors());


//Google & Facebook Authentication Setup:

app.use(googlePassport.initialize());
app.use(fbPassport.initialize());

googlePassport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});

googlePassport.deserializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});

//Importing Auth & User Controller:

const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");

app.get("/", (req, res) => {
  return res.status(200).send("Welcome To Realme's Clone Server on Heroku!");
});

app.use("/users", userController);

//Validations:

app.post(
  "/register",
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email is required and should be a valid email address"),
  body("password")
    .trim()
    .isStrongPassword()
    .withMessage("Password is required and should be a strong password"),
  register
);

app.post(
  "/login",
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email is required and should be a valid email address"),
  body("password")
    .trim()
    .isStrongPassword()
    .withMessage("Password is required and should be a strong password"),
  login
);

// Google Authentication:

const scope = [
  "https://www.googleapis.com/auth/plus.login",
  "https://www.googleapis.com/auth/userinfo.email",
];
app.get(
  "/auth/google",
  googlePassport.authenticate("google", { scope: scope })
);

app.get(
  "/auth/google/callback",
  googlePassport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  function (req, res) {
    const { user, token } = req.user;
    return res.status(200).json({ user, token });
  }
);

// Facebook Authentication:

app.get(
  "/auth/facebook",
  fbPassport.authenticate(
    "facebook",
    {
      data: [
        {
          permission: "public_profile",
          status: "granted",
        },
        {
          permission: "email",
          status: "granted",
        },
        {
          permission: "user_friends",
          status: "declined",
        },
      ],
    },
    { scope: "public_profile,email" }
  )
);

app.get(
  "/auth/facebook/callback",
  fbPassport.authenticate("facebook", {
    failureRedirect: "/auth/facebook/failure",
  }),
  function (req, res) {
    const { user, token } = req.user;
    return res.status(200).json({ user, token });
  }
);

module.exports = app;
