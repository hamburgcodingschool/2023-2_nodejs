const express = require("express");

app = express();

// add a `lang` query parameter to `queryGreeting`,
// such that you can get a response in another language.
// E.g. a request to /queryGreeting?name=Charlie&lang=fr
//  will give you "Bonjour, Charlie"

app.get("/queryGreeting", (req, res) => {
    // print some helpful debugging information
    console.log("Query Parameters:");
    console.log(typeof req.query);
    console.log(req.query);
    console.log("req.query.something is: " + req.query.something);

    let greeting = "Hello";
    // special case of `lang` being `fr`
    if (req.query.lang == "fr") {
        greeting = "Bonjour";
    } else if (req.query.lang == "de") {
        greeting = "Hallo";
    }

    let name = "Stranger";
    if (req.query.name != undefined) {
        name = req.query.name;
    }
    res.json(greeting + ", " + name);
});

app.get("/greeting/:name?/:lang?", (req, res) => {
    console.log(req.params);
    let name = req.params.name;
    if (name == undefined) {
        name = "Stranger";
    }
    let lang = req.params.lang;
    if (lang == undefined) {
        lang = "en";
    }
    // this is solved using a different style
    // just for you to see how it could be approached
    // in a more elegant way, but it doesn't matter,
    // you could do the language choice the same way as in the other function
    const greetings = {
        en: "Hello",
        fr: "Bonjour",
        de: "Hallo",
    };
    res.json(greetings[lang] + ", " + name);
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
