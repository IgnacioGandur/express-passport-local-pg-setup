const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
    connectionString:
        process.env.NODE_ENV === "production"
            ? process.env.PRODUCTION_CONNECTION_STRING
            : process.env.DEVELOPMENT_CONNECTION_STRING,
});

module.exports = pool;
