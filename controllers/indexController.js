const indexController = {
    indexGet: (req, res) => {
        res.render("pages/index", {
            user: req.user,
        });
    },
};

module.exports = indexController;
