const { Router } = require("express");
const registerController = require("../controllers/registerController.js");

const registerRouter = Router();

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", registerController.registerPost);

module.exports = registerRouter;
