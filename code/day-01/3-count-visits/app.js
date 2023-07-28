const express = require("express");
const app = express();
const port = 3000;

/*
Exercises (they're already solved in this code):
1. print the number of times the server was visited.
2. print the number of times the server was visited at "/here"
*/

let visited = 0;
let visitedHere = 0;

// typing out request & response for clarity, but later they'll go by req and res because we're lazy
app.get("/", (request, response) => {
  visited++; // reminder: short for "visited = visited + 1" or "visited += 1"
  // this happens on the server
  console.log("/ was visited by someone");
  // this will be sent to the client
  response.send(`Hello, World! This was visited ${visited} times.`);
});
app.get("/here", (request, response) => {
  visitedHere++;
  response.send(`Hello from here! This was visited ${visitedHere} times.`);
});
app.get("/statistics", (request, response) => {
  response.send(
    `Stats! / was visited ${visited} times and /here was visited ${visitedHere} times.`
  );
});

app.listen(port, function () {
  console.log(`Hello world app started on port ${port}`);
  console.log(`Initializing "visited" variable with value ${visited}`);
});
