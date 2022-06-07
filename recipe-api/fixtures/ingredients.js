const _ = require("lodash");
// mongoose setup
const mongoose = require("mongoose");
const { Schema } = mongoose;

main().catch((err) => console.err);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/recipe_app_db");
}

// Schema for ingredient

const ingredientSchema = new Schema(
  {
    name: String,
    id: String,
    dietary_restriction_id: Number,
    vegan: Boolean,
    vegetarian: Boolean,
  },
  { collection: "ingredients" }
);

// how to make sure it connects to my already established ingredients collection?
// convert schema into a model to work with
const Ingredient = mongoose.model("ingredients", ingredientSchema);
/**
 *
 * @param {*} filters
 * @returns {Promise<array>}filtered list of ingredients if filter is present
 */
const getIngredients = async (filters = {}) => {
  let ingredientData = Ingredient.find({});
  // import lodash library and filter function
  return await _.filter(ingredientData, filters);
};

// typically when you look up by id, it exists.

const findIngredientById = async (ingredientID) => {
  const foundIngredient = Ingredient.findOne({ id: ingredientID });
  return await foundIngredient;
};

// create a new ingredient to add to db
const createNewIngredient = async (ingredientData) => {
  const ingredientToAdd = new Ingredient({
    name: ingredientData.name,
    id: ingredientData.id,
    dietary_restriction_id: ingredientData.dietary_restriction_id,
    vegan: ingredientData.vegan,
    vegetarian: ingredientData.vegetarian,
  });

  await ingredientToAdd
    .save(function (err) {
      if (err) return handleError(err);
    })
    .then(() => {
      return ingredientToAdd;
    });
};

module.exports = {
  findIngredientById,
  getIngredients,
  createNewIngredient,
};
