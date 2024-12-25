require("dotenv").config();
const path = require("node:path");
const express = require("express");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const pool = require("./db/pool.js");
const passport = require("passport");
const router = require("./routes/router.js");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        store: new pgSession({
            pool: pool,
        }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        },
    }),
);

app.use(passport.session());

require("./authentication/passport.js");

app.use(router);

app.listen(8080, () => {
    console.log("App listening on http://localhost:8080/");
});
