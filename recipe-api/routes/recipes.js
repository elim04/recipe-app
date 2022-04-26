const express = require("express");
const router = express.Router();
const { findRecipeById, getAllRecipes } = require("../testData/dbHelpers");

router.get("/", (req, res, next) => {
  const allRecipes = getAllRecipes();
  res.json(allRecipes);

  if (err) {
    next(new Error("Not found"));
  }
});

router.get("/:recipe_id", (req, res, next) => {
  const { recipe_id } = req.params;
  const foundRecipe = findRecipeById(recipe_id);

  if (foundRecipe) {
    res.json(foundRecipe);
  } else if (err) {
    next(new Error("Not found"));
  }
});

module.exports = router;
