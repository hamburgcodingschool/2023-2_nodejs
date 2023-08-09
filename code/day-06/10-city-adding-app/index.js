const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "world",
});

/* Purpose of this function:
- Receive an HTTP request (one)
- Create an HTTP response (but only one)

if you do it twice, you will get: "Cannot set headers after they are sent to the client"

*/
app.get("/addCity", (req, res) => {
    /* TODO:
  Now, write an endpoint `/addCity` that allows you to add a city via API. For that we can use query parameters:
- name
- countryCode
- district
- population
so for example `/addCity?name=Codeheim&countryCode=COD&district=Parsley&population=256`
 Task 1: make the addCity endpoint "understand" the query parameters (without posting them to the DB) and log them to the console
Task 2: create a SQL query string (and log that SQL query to the console. Looks e.g. like INSERT INTO cities (Name, CountryCode, District, population) VALUES ('Codeheim', 'COD', 'Parsley', 256)
Task 3: execute that SQL query on the database
Task 4: check with the DB whether it worked (SELECT * FROM cities WHERE Name="Codeheim"; )
Task 5: the user of the API might forget to submit a parameter. make sure to check whether all four parameters exist (otherwise you'll have undefined values in your table) and respond with an error

Extra tasks (not done here yet; advanced):
Task 6: check before adding to the DB, whether the city with the same values already exists (such that you don't create a duplicate) and respond with an error if that happened
  */
    console.log(req.query.name);

    // unpack parameters
    const name = req.query.name;
    const countryCode = req.query.countryCode;
    const district = req.query.district;
    const population = req.query.population;

    // check whether all of the parameters have a value
    if (
        name == undefined ||
        countryCode == undefined ||
        district == undefined ||
        population == undefined
    ) {
        res.json(
            "Error: one of the required parameters is missing. Please check back with the documentation (lol)"
        );
    }

    const values = `"${name}", "${countryCode}", "${district}", ${population}`;
    const sql = `INSERT INTO cities (Name, CountryCode, District, population) VALUES (${values})`;

    console.log(sql);
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json(err);
            // exit the function to prevent generating another response
            return;
        }
        console.log(result);
        res.json();
    });
});

app.listen(port, () => {
    console.log(`App started on ${port}`);
});
