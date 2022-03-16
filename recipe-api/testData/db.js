const _ = require("lodash");

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
  return foundRecipe;
};

// make an async function, callback, instead of returning value. resolve promise/provide callback

// Ingredient Helpers

const getAllIngredients = () => {
  return ingredientData;
};

/**
 *
 * @param {*} filters
 * @returns filtered list of ingredients if filter is present
 */
const getIngredients = (filters = {}) => {
  // import lodash library and filter function
  return _.filter(ingredientData, filters);
};

// typically when you look up by id, it exists.

const findIngredientById = (ingredientID) => {
  const foundIngredient = ingredientData.find(
    (ingredient) => ingredient["id"] === ingredientID
  );

  return foundIngredient;
};

module.exports = {
  findRecipeById,
  findIngredientById,
  getAllIngredients,
  getAllRecipes,
  filterByDietaryRestriction,
  getIngredients,
};
