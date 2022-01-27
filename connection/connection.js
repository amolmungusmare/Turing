require("dotenv").config();
const knex = require("knex")({
  client: process.env.client,
  connection: {
    host: process.env.host,
    user: process.env.user,
    password: "#Amol441907",
    database: process.env.database,
  },
});
console.log("Connected...");
module.exports = knex;
