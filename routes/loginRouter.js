const { Router } = require("express");
const loginController = require("../controllers/loginController.js");
const passport = require("passport");

const loginRouter = Router();

loginRouter.get("/", loginController.loginGet);
loginRouter.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: `/login?error=${encodeURIComponent("Something went wrong, not logged in.")}`,
    }),
);

module.exports = loginRouter;
