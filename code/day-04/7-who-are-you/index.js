const express = require("express");

app = express();

/*
Exercise

1. add a `lang` query parameter to `/queryGreeting`, such that you can get a response in another language.
   e.g. a request to /queryGreeting?name=Charlie&lang=fr will give you "Bonjour, Charlie"
*/

app.get("/queryGreeting", (req, res) => {
    let name = "Stranger";
    if (req.query.name != undefined) {
        name = req.query.name;
    }
    res.json("Hello, " + name);
});

/*
Exercise

2. add a `lang` parameter to the `/greeting` route, such that e.g. a request to /greeting/James/fr will give you "Bonjour, James"
3. implement a query parameter to the  `/greeting` of your choice. For example, to print a formal greeting or a goodbye
*/

app.get("/greeting/:name?", (req, res) => {
    console.log(req.params);

    // because route params are usually "expected", we turn around the conditions a little bit,
    // even though in this case it's optional
    let name = req.params.name;
    if (name == undefined) {
        name = "Stranger";
    }

    res.json("Hello, " + name);
});

app.listen(3000, () => {
    console.log("server started.");
});
