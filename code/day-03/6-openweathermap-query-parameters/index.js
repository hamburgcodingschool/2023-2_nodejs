const express = require("express");
const app = express();
const port = 3000;

app.get("/exampleRequest", function (req, res) {
    console.log("request coming in from client!");
    console.log("hostname:" + request.hostname);
    console.log("ip:" + request.ip);
    console.log("method:" + request.method);

    res.json("response is not important, we're looking at the request data.");
});

/*
Exercise

Write an endpoint that is working the same way as openweathermap
and shows you the query parameters on the console log

console.log(req.query)

When we call 
http://localhost:3000/weather?q=dublin&appid=69b52e70cf...bc50d4629c4f7bd6f2&units=metric

we get

{"q":"dublin",
"appid":"69b52e70cf...bc50d4629c4f7bd6f2",
"units":"metric"}

*/
app.get("/weather", function (req, res) {
    console.log("query parameters:");
    console.log(req.query);
    console.log(typeof req.query);

    res.json("response is not important, we're looking at the request data.");
});

app.listen(port, function () {
    console.log(`App started on port ${port}`);
});
