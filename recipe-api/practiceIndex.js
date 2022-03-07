const process = require("process");
const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);
router.all((req, res) => {
  res.send("Hello, world!");
});

function handler(req, res, next) {
  const { username } = req.body;

  if (!username) {
    next(new Error("missing username"));
    return;
  }

  res.json({ message: `Hello ${username}!` });
}

router.post("/welcome", handler);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.toString() });
});

// app.post("/", (req, res) => {
//   res.send("Cool API request");
// });

// Router object
// A router object is an isolated instance of middleware and routes

// req object - testing with params
router.get("/ingredients/:category", (req, res, next) => {
  console.log(req.params);
  res.send(`the req param is: ${req.params.category}`);
});

router.get("/ingredients", (req, res, next) => {
  res.send("You are in the ingredients path");
});

// So you can pass this specific router to /recipes/* to use?
app.use("/recipes", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
