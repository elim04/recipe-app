const process = require("process");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// app object setup
const app = express();
app.use(cors());
// Routes

// Recipes
// const recipeRouter = require("./routes/recipes");
app.use("/api/recipes", require("./routes/recipes"));

// Ingredients
app.use("/api/ingredients", require("./routes/ingredients"));

// what happens when there is a null error object/response - look into docs

// according to docs you define error-handling middleware last, after other app.use() and route calls
app.use((err, req, res, next) => {
  if (err.message === "Not found") {
    res.status(404);
  }

  if (err.message === "Forbidden") {
    res.status(403);
  }

  if (err.message === "Internal Server Error") {
    res.status(500);
  }
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);

// add new app.use for middleware
// handle error in middleware fn

// fn signature
// const errHandler = (err, req, res, next) => {
//   if (err.message === "Not found") {
//     res.status(404);
//   }
// };

// link for documentation about error handling for express
// https://expressjs.com/en/guide/error-handling.html#:~:text=If%20there%20is%20no%20error,catches%20and%20processes%20the%20error.&text=The%20above%20example%20uses%20a,and%20pass%20them%20to%20Express.
