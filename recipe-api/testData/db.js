// Test Data for API setup
const ingredientData = require("./ingredientsData");
const dietaryRestrictionData = require("./dietaryRestrictions");
const recipeData = require("./recipes");

// Recipe Helpers

const getAllRecipes = () => {
  return recipeData;
};

const findRecipeById = (recipeID) => {
  let foundRecipe;
  for (let recipe of recipeData) {
    if (recipe.recipe_id === recipeID) {
      foundRecipe = recipe;
    }
  }

  if (foundRecipe) {
    return foundRecipe;
  } else {
    throw new Error("No recipe found");
  }
};

// make an async function, callback, instead of returning value. resolve promise/provide callback

// Ingredient Helpers

const getAllIngredients = () => {
  return ingredientData;
};

// typically when you look up by id, it exists.

const findIngredientById = (ingredientID) => {
  const foundIngredient = ingredientData.find(
    (ingredient) => ingredient["id"] === ingredientID
  );

  if (foundIngredient) {
    return foundIngredient;
  } else {
    throw new Error("No ingredient found");
  }
};

module.exports = {
  findRecipeById,
  findIngredientById,
  getAllIngredients,
  getAllRecipes,
};

// change to ingredient model, import testData directly
