const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "sql312.epizy.com",
  user: "epiz_34239170",
  database: "epiz_34239170_testing",
  password: "n7GudPHXfMPE4SN",
});

module.exports = pool.promise();
