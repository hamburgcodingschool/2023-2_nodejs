const express = require("express");
const app = express();
const port = 3000;

let helloCount = 0;
let thankyouCount = 0;
let happyCount = 0;

app.get("/hello", function (req, res) {
  helloCount++;
  res.send("Hello");
});

app.get("/thankyou", function (req, res) {
  thankyouCount++;
  res.send("ty");
});

app.get("/happy", function (req, res) {
  happyCount++;
  res.send("Mach!");
});

app.get("/statistics", function (req, res) {
  // use .json instead of .send! (although in this case it doesn't make a big difference...)
  res.json({
    // key and value. Note how in the output (when you call the endpoint with your client), the key will be quoted, while the number will not.
    // This is due to a transformation from JavaScript to JSON!
    helloCount: helloCount,
    // note, that you can also just the variable name,
    // _if_ key and value are the same
    thankyouCount,
    // or you can actively map key and value that are different from each other
    happinessCount: happyCount,
  });
});
app.listen(port, function () {
  console.log(`App started on port ${port}`);
});
