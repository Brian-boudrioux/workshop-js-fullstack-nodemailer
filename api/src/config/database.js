const db = require("mysql2/promise");

const pool = db.createPool({
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

module.exports = pool;