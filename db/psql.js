
const { Pool } = require("pg");
const pool = new Pool({
  user: "huirenchuah",
  host: "localhost",
  database: "abc",
  password: "0330",
  port: 5432,
});


module.exports = pool;
