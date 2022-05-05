// mongoose setup
const mongoose = require("mongoose");

main().catch((err) => console.err);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/recipe_app_db");
}

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
  findIngredientById,
  getIngredients,
};
