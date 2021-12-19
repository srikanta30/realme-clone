// User Controller:

const express = require("express");

const router = express.Router();

const crudController = require("./crud.controller");
const User = require("../models/user.model");

require("dotenv").config();
const { ORIGIN } = process.env;

router.get("/login/success", (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "success",
        user: req.user,
      });
    }
    else {
        res.status(401).json({
            request: req.user,
            success: false,
            message: "failure" 
        })
    }
  });
  
  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });
  
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(`${ORIGIN}`);
  });

router.get("", crudController.get(User));
router.get("/:id", crudController.getOne(User));
router.patch("/:id", crudController.updateOne(User));
router.delete("/:id", crudController.deleteOne(User));

module.exports = router;
