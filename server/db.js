import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "todo list",
    password: process.env.POSTGRES_PASSWORD,
    port: 5433
})
db.connect();

export default db;