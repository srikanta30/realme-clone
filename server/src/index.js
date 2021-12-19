//Importing required configs & packages:

const express = require("express");
const app = express();

const cors = require("cors");
const { body } = require("express-validator");
const cookieSession = require("cookie-session");

const googlePassport = require("./configs/google.passport");

require("dotenv").config();
const { ORIGIN } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: `${ORIGIN}`,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.options('*', cors());

app.use(
  cookieSession({ name: "session", keys: ["realme"], maxAge: 24 * 60 * 60 * 100 })
);


//Google Authentication Setup:

app.use(googlePassport.initialize());
app.use(googlePassport.session());

googlePassport.serializeUser((user, done) => {
  done(null, user);
});

googlePassport.deserializeUser((user, done) => {
  done(null, user);
});

//Importing Auth & User Controller:

const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");

app.get("/", (req, res) => {
  return res.status(200).send({"Error": "Sorry, you are not authorized to access our servers. 😉"});
});

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


app.get(
  "/auth/google",
  googlePassport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  googlePassport.authenticate("google", {
    failureRedirect: "/users/login/failed",
    successRedirect: `${ORIGIN}`,
  }),
);

const isAutheticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send({"Error": "Sorry, you are not authorized to access our servers. 😉"});
  }
};

app.use("/users", isAutheticated, userController);

module.exports = app;
