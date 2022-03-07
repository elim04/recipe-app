const express = require("express");
const router = express.Router();
const { findRecipeById } = require("../testData/dbHelpers");

// Test Data for API setup
const recipeData = require("../testData/recipes");

router.get("/", (req, res) => {
  res.send(recipeData);
});

router.get("/:recipe_id", (req, res) => {
  const { recipe_id } = req.params;
  const recipeDataToSearch = recipeData;
  const foundRecipe = findRecipeById(recipe_id, recipeDataToSearch);

  if (foundRecipe) {
    res.send(foundRecipe);
  } else {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// Questions
// best way to error handle for router object
// should i be finding a way to use .then, .catch for a promise?
