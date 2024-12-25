const { registerNewUser } = require("../db/queries.js");

const registerController = {
    registerGet: (req, res) => {
        res.render("pages/register");
    },

    registerPost: async (req, res) => {
        const { username, password } = req.body;
        await registerNewUser(username, password);
        res.redirect("/login");
    },
};

module.exports = registerController;
