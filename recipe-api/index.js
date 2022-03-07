const process = require("process");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// app object setup
const app = express();
app.use(cors());

// Routes

// Recipes
const recipeRoutes = require("./routes/recipes");
app.use("/api/recipes", recipeRoutes);

// Ingredients

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
