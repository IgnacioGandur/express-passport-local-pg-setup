const { Router } = require("express");
const logoutRouter = Router();

logoutRouter.get("/", (req, res) => {
    req.logout((error) => {
        if (error) {
            return next(error);
        }
        res.redirect("/");
    });
});

module.exports = logoutRouter;
