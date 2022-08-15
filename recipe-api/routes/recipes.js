const express = require("express");
const router = express.Router();
const {
  findRecipeById,
  getAllRecipes,
  addNewRecipe,
} = require("../fixtures/recipes");

// GET

router.get("/", (req, res, next) => {
  getAllRecipes().then((recipeData) => {
    res.json(recipeData);
  });

  if (err) {
    next(new Error("Not found"));
  }
});

router.post("/", (req, res, next) => {
  const { recipe: recipeData } = req.body;

  const newRecipe = addNewRecipe(recipeData);

  if (newRecipe) {
    res.status(201).json(newRecipe);
  } else {
    next(new Error("Internal Server Error"));
  }
});

router.get("/:recipe_id", (req, res, next) => {
  const { recipe_id } = req.params;
  findRecipeById(recipe_id)
    .then((foundRecipe) => {
      res.json(foundRecipe);
    })
    .catch((err) => {
      next(new Error("Not found"));
    });
});

module.exports = router;
