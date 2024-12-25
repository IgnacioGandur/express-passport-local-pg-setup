const db = require("./pool.js");
const bcrypt = require("bcryptjs");

async function registerNewUser(username, password) {
    try {
        const query = `
        INSERT INTO "users" ("username", "password") VALUES ($1, $2);
    `;
        const hashedPass = await bcrypt.hash(password, 10);
        await db.query(query, [username, hashedPass]);
    } catch (error) {
        console.error("Database error:", error.message);
        throw new Error(
            "Something went wrong when trying to add a new user into the database.",
        );
    }
}

async function getUserByUsername(username) {
    try {
        const query = `
            SELECT * FROM "users" WHERE "username" = $1;
        `;
        const { rows } = await db.query(query, [username]);
        return rows[0];
    } catch (error) {
        console.error("Database error:", error.message);
        throw new Error(
            "Something went wrong whent trying to get the user by it's username.",
        );
    }
}

async function getUserById(id) {
    try {
        const query = `
            SELECT * FROM "users" WHERE "id" = $1;
        `;

        const { rows } = await db.query(query, [id]);

        return rows[0];
    } catch (error) {
        console.error("Database error:", error.message);
        throw new Error(
            "Something went wrong when trying to get the user by it's id.",
        );
    }
}

module.exports = {
    registerNewUser,
    getUserByUsername,
    getUserById,
};
