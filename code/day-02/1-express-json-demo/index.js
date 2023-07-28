const express = require("express");
const app = express();
const port = 3000;

app.get("/helloPlain", function (req, res) {
  res.send("Hello");
});

app.get("/helloJSON", function (req, res) {
  // use .json instead of .send here
  res.json({ greeting: "Hello", owner: "moritz" });
});

app.listen(port, function () {
  console.log(`App started on port ${port}`);
});
