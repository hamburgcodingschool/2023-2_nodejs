const mysql = require("mysql2");
const express = require("express");
const app = express();

const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "world",
});

app.get("/cities", function (req, res) {
  const sql = `SELECT * FROM cities LIMIT 5`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    // we're using express now inside the mysql query-ing (instead of `console.log`-ging the result)
    res.json(result);
  });
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
