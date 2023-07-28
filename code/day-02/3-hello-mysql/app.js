const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "world",
});

const sql = `SELECT *
            FROM cities
            LIMIT 5`;

connection.query(sql, function (err, result) {
  if (err) {
    console.log(err);
    return;
  }
  result.forEach(function (element) {
    console.log(element.District);
  });
});
connection.end();
