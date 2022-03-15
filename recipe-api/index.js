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
app.use((err, req, res, next) => {
  if (err.message === "Not found") {
    res.status(404);
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
