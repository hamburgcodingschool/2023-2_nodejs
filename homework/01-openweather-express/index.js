const express = require("express");
const app = express();
const port = 3000;
const owm_base_url = "https://api.openweathermap.org/data/2.5";

// get API key from an Environment Variable
// it needs to be added before calling `node`, for example like:
// OWM_API_KEY=aaaaa74c846b367c7d1fba42fffff node index.js
const API_KEY = process.env.OWM_API_KEY || "";

function getTempFromURL(url) {
    return fetch(url).then(
        // handling response from OWM
        function (urlResponse) {
            // unpack the result to a JSON
            return urlResponse.json().then(function (jsonResult) {
                // finally access the jsonResult here and return it
                return jsonResult.main.temp;
            });
        }
    );
}

app.get("/temperatureHamburg", function (req, res) {
    const url = `${owm_base_url}/weather?q=Hamburg&appid=${API_KEY}&units=metric`;
    // returns a promise
    console.log("Hello");
    // chain of promises now encapsulate in a function
    getTempFromURL(url).then(function (temperature) {
        res.json({ temp: temperature });
    });
});

app.listen(port, () => {
    console.log("App started.");
});
