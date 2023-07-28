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

// write an endpoint called `countries` that returns the first 10 countries as a JSON list
app.get("/countries", function (req, res) {
  const sql = `SELECT * FROM countries LIMIT 10`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

// write an endpoint called `randomCountry` that returns a random country as JSON
app.get("/randomCountry", function (req, res) {
  const sql = `SELECT * FROM countries ORDER BY RAND() limit 1`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

// write an endpoint called `kenyanLanguages` that returns a JSON list with all languages that are spoken in Kenya ordered by their percentage
app.get("/kenyanLanguages", function (req, res) {
  const sql = `SELECT * FROM languages WHERE CountryCode="KEN" ORDER BY Percentage DESC`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
