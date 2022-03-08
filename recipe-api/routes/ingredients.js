const express = require("express");
const router = express.Router();
const { findIngredientById } = require("../testData/dbHelpers");

// Test Data for API setup
const ingredientData = require("../testData/ingredientsData");
const dietaryRestrictionData = require("../testData/dietaryRestrictions");

// GET all ingredients
router.get("/", (req, res) => {
  res.send(ingredientData);
});

// GET specific ingredients
router.get("/:ingredient_id", (req, res) => {
  const { ingredient_id } = req.params;
  const ingredientDataToSearch = ingredientData;

  const foundIngredient = findIngredientById(
    ingredient_id,
    ingredientDataToSearch
  );

  if (foundIngredient) {
    res.send(foundIngredient);
  } else {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// Questions
// How would i utilize query parms to get the ingredients with dietary restrictions
// How do i change my route
