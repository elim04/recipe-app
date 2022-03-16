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

  if (foundIngredient) {
    return foundIngredient;
  } else {
    throw new Error("No ingredient found");
  }
};

// No longer required as using lodash above

// // find dietary restriction id

// const findDietaryRestrictionID = (dietaryRestriction) => {
//   const dietaryRestrictionToNum = Number(dietaryRestriction);
//   const foundDietaryRestrictionID = dietaryRestrictionData.filter(
//     (restriction) => restriction.id === dietaryRestrictionToNum
//   );

//   return foundDietaryRestrictionID;
// };

// const filterByDietaryRestriction = (dietaryRestriction) => {
//   // get the dietary restriction object
//   const dietaryRestrictionId = findDietaryRestrictionID(dietaryRestriction);
//   // filter based on found dietary restriction id
//   const filteredIngredients = ingredientData.filter(
//     (ingredient) =>
//       ingredient["dietary_restriction_id"] === dietaryRestrictionId[0]["id"]
//   );
//   return filteredIngredients;
// };

module.exports = {
  findRecipeById,
  findIngredientById,
  getAllIngredients,
  getAllRecipes,
  filterByDietaryRestriction,
  getIngredients,
};
