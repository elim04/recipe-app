const express = require("express");
const router = express.Router();
const {
  findIngredientById,
  getAllIngredients,
  filterByDietaryRestriction,
} = require("../testData/db");

// GET all ingredients
router.get("/", (req, res) => {
  const allIngredients = getAllIngredients();
  res.send(allIngredients);

  // filter for query params on dietary restrictions and filter based on that response
  // return is an object with key pair value ie. {dietary_restriction: vegan}
  const dietaryQuery = req.query;

  if (dietaryQuery["dietary_restriction"]) {
    console.log("test query here", dietaryQuery);
    const filteredList = filterByDietaryRestriction(dietaryQuery);
    console.log("filtered list:", filteredList);
  }

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
