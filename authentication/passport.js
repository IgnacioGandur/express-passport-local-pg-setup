const passport = require("passport");
const strategy = require("./local-strategy.js");
const { getUserById } = require("../db/queries.js");

passport.use(strategy);
passport.serializeUser((user, done) => {
    return done(null, user.id);
});
passport.deserializeUser(async (userId, done) => {
    try {
        const user = await getUserById(userId);
        done(null, user);
    } catch (error) {
        done(error);
    }
});
