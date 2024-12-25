const { Router } = require("express");
const indexRouter = require("./indexRouter.js");
const registerRouter = require("./registerRouter.js");
const loginRouter = require("./loginRouter.js");
const logoutRouter = require("./logoutRouter.js");

const router = Router();

router.use("/", indexRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);

module.exports = router;
