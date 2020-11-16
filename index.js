// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 2020, () => {
  console.log("Node js server is running on 2020");
});

module.exports = app;