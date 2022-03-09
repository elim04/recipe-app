const express = require("express");
const router = express.Router();
const { findRecipeById, getAllRecipes } = require("../testData/db");

router.get("/", (req, res) => {
  const allRecipes = getAllRecipes();
  res.send(allRecipes);
});

router.get("/:recipe_id", (req, res) => {
  const { recipe_id } = req.params;
  const foundRecipe = findRecipeById(recipe_id);

  if (foundRecipe) {
    res.send(foundRecipe);
  } else {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;

// Questions
// best way to error handle for router object
// should i be finding a way to use .then, .catch for a promise?

// things to look into
// koa - check out
// nest or next ?

// utilize next param. middleware error handling
