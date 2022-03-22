const _ = require("lodash");

// Test Data for API setup
const ingredientData = require("./ingredientsData");
const dietaryRestrictionData = require("./dietaryRestrictions");
const recipeData = require("./recipes");

// Recipe Helpers

const getAllRecipes = async () => {
  return await recipeData;
};

const findRecipeById = async (recipeID) => {
  let foundRecipe;
  for (let recipe of recipeData) {
    if (recipe.recipe_id === recipeID) {
      foundRecipe = recipe;
    }
  }
  return await foundRecipe;
};

// make an async function, callback, instead of returning value. resolve promise/provide callback

// Ingredient Helpers

const getAllIngredients = async () => {
  return await ingredientData;
};

/**
 *
 * @param {*} filters
 * @returns {Promise<array>}filtered list of ingredients if filter is present
 */
const getIngredients = async (filters = {}) => {
  // import lodash library and filter function
  return await _.filter(ingredientData, filters);
};

// typically when you look up by id, it exists.

const findIngredientById = async (ingredientID) => {
  const foundIngredient = ingredientData.find(
    (ingredient) => ingredient["id"] === ingredientID
  );

  return await foundIngredient;
};

module.exports = {
  findRecipeById,
  findIngredientById,
  getAllIngredients,
  getAllRecipes,
  getIngredients,
};
