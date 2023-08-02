const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "world",
});

/* Exercise

In the Homework 3 we had a request like 

    http://localhost:3000/getCity?cityID=3019

to get city with ID 3019. Now, you need to implement it as part of the URL

    http://localhost:3000/city/3019

That means, provide an endpoint `/city/...`, that has one _required_ parameter in the URL
such that you can get the city by ID
*/

// SOLUTION
app.get("/city/:id", (req, res) => {
    // with our ID
    // we want to get a result from Database
    // but first, let's get our parameter on the console:
    console.log("user provided URL ID:" + req.params.id);

    sql = `SELECT * FROM cities WHERE cities.ID=${req.params.id}`;
    console.log("The DB request will be " + sql);
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.json("An error occurred.");
            return;
        }
        res.json(result);
    });
});

/*
Side notes: (this is really not important. It's bonus knowledge)

The above :id parameter is _required_, so a request to http://localhost:3000/city will fail.
Dependent on whether people usually make that mistake, we could be nicer to the user of our API and
provide some guidance.

Variant A -- implement the /city endpoint without a parameter and put the error there

app.get("/city", (req, res) => {
    res.json({ errorMessage: "Please call /city/<id> (with a parameter)" });
});

Variant B -- make the :id param optional with a question mark, and put an error message to the user if it's not provided

app.get("/city/:id?", (req, res) => {
    if (req.params.id == undefined) {
        res.json({ errorMessage: "Please call /city/<id> (with a parameter)" });
        return;
    }
    // ...
}

*/

app.listen(port, function () {
    console.log(`App started on port ${port}`);
});
