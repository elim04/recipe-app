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

app.listen(PORT);
console.log(`Listening on port ${PORT}`);

//include err, next
