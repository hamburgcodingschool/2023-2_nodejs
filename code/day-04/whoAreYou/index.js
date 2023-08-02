const express = require("express");

app = express();

app.get("/queryGreeting", (req, res) => {
    console.log("Query Parameters:");
    console.log(req.query);

    let name = "Stranger";
    if (req.query.name != undefined) {
        name = req.query.name;
    }
    res.json("Hello, " + name);
});

app.get("/greeting/:name?", (req, res) => {
    console.log(req.params);
    let name = req.params.name;
    if (name == undefined) {
        name = "Stranger";
    }
    res.json("Hello, " + name);
});

/*

Next step: make name optional.

Exercises
- add a `lang` parameter to `queryGreeting`, such that you can get a response in another language. E.g. a request to /queryGreeting?name=Charlie&lang=fr
  will give you "Bonjour, Charlie"
- add a `lang` parameter to the `/greeting` route, such that e.g. a request to /greeting/James/fr will give you "Bonjour, James"
- implement a query parameter to the  `/greeting` of your choice. For example, to print a formal greeting or a goodbye
*/

app.listen(3000, () => {
    console.log("server started.");
});
