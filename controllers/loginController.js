const loginController = {
    loginGet: (req, res) => {
        const { error } = req.query;
        res.render("pages/login", {
            loginError: error,
        });
    },
};

module.exports = loginController;
