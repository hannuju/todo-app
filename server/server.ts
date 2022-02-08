const express = require("express");
const path = require("path");
const app = express();
const PORT = 9000;
const BUILD_PATH = (path.join(__dirname, "..", "front-end", "build"));

app.use(express.static(BUILD_PATH));

app.get("/", function (req, res) {
  res.sendFile(path.join(BUILD_PATH, "index.html"));
});

app.listen(PORT);
console.log(`Listening at port ${PORT}`)
