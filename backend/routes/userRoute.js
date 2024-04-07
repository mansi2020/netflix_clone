// import express from "express";
// import { Register,Login,Logout } from "../controllers/User.js";

const express = require("express") ;
const { Register,Login,Logout } = require("../controllers/User.js") ;

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

module.exports = router;