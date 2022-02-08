const express = require("express");
const path = require("path");
const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, "..", "front-end", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "front-end", "index.html"));
});

app.listen(PORT);
console.log(`Listening at port ${PORT}`)
