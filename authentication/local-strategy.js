const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const { getUserByUsername } = require("../db/queries.js");

async function verifyFunction(username, password, done) {
    try {
        const user = await getUserByUsername(username);

        if (!user) {
            return done(null, false);
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
            return done(null, false);
        }

        return done(null, user);
    } catch (error) {
        console.error(
            "Something went wrong when trygin to create the local strategy;",
            error.message,
        );
        return done(error);
    }
}

const strategy = new LocalStrategy(verifyFunction);

module.exports = strategy;
