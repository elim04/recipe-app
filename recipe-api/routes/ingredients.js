const express = require("express");
const router = express.Router();
const { findIngredientById, getAllIngredients } = require("../testData/db");

// GET all ingredients
router.get("/", (req, res) => {
  const allIngredients = getAllIngredients();
  res.send(allIngredients);

  // examine request to get query string arguments
  // req.query --> what does it return single value or array
});

// GET specific ingredients
router.get("/:ingredient_id", (req, res) => {
  // get request params
  const { ingredient_id } = req.params;
  // use helper fn to find ingredient
  const foundIngredient = findIngredientById(ingredient_id);

  // change to error middleware fn
  if (foundIngredient) {
    res.send(foundIngredient);
  } else {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;

// remove data
