const express = require("express");
const router = express.Router();
const {
  findIngredientById,
  getIngredients,
  createNewIngredient,
} = require("../fixtures/ingredients");

// GET all ingredients
router.get("/", (req, res) => {
  // filter for query params on dietary restrictions and filter based on that response
  // return is an object with key pair value ie. {dietary_restriction: vegan}
  const dietaryQuery = req.query;
  const filters = {};
  // const ingredientList = getIngredients();

  if (dietaryQuery["dietary_restriction"]) {
    filters.dietary_restriction_id = Number(
      dietaryQuery["dietary_restriction"]
    );
  }

  if (dietaryQuery["vegan"]) {
    filters.vegan = true;
  }

  res.json(getIngredients(filters));
});

// POST add new ingredient

router.post("/", (req, res, next) => {
  const ingredientData = req.body;

  const newIngredient = createNewIngredient(ingredientData);

  if (newIngredient) {
    res.status(201).json(newIngredient);
  } else {
    next(new Error("Internal Server Error"));
  }
});

// GET specific ingredients
router.get("/:ingredient_id", (req, res, next) => {
  // get request params
  const { ingredient_id } = req.params;
  // use helper fn to find ingredient
  const foundIngredient = findIngredientById(ingredient_id);

  // change to error middleware fn
  if (foundIngredient) {
    res.json(foundIngredient);
  } else if (err) {
    // send the error here
    next(new Error("Not found"));
  }
});

module.exports = router;

// integrate with google/facebook signin ? authenticate
// short term solution --> hardcode pregenerated web token that identifies you and store in browser
