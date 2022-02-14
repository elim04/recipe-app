const process = require("process");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
