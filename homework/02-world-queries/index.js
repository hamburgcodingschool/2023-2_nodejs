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

let nextCityID = 1;
app.get("/getNextCity", function (req, res) {
  const sql = `SELECT * FROM cities WHERE cities.ID=${nextCityID}`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
    nextCityID++;
  });
});

app.listen(port, function () {
  console.log(`App started on port ${port}`);
});
