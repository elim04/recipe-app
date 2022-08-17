// Mongodb setup
const { getDatabase } = require("../db");
const ObjectId = require("mongodb").ObjectId;
// Recipe Helpers

const getAllRecipes = async () => {
  const db = await getDatabase();
  const recipes = await db.collection("recipes").find().toArray();
  return recipes;
};

const findRecipeById = async (recipeID) => {
  const db = await getDatabase();
  const recipe = await db
    .collection("recipes")
    .findOne({ _id: ObjectId(recipeID) });
  return recipe;
};

const addNewRecipe = async (recipeData) => {
  const db = await getDatabase();
  const recipeToInsert = await db.collection("recipes").insertOne({
    name: recipeData.name,
    servingSize: recipeData.servingSize,
    cookware: recipeData.cookware,
    ingredients: recipeData.ingredients,
    instructions: recipeData.instructions,
  });

  let recipe = {};

  if (recipeToInsert.acknowledged) {
    recipe = await db.collection.findOne({ _id: recipeToInsert.insertedId });
    console.log("recipe added", recipe);
  }

  return recipe;
};

const deleteRecipe = async (recipeID) => {
  const db = await getDatabase();
  await db.collection("recipes").deleteOne({ _id: ObjectId(recipeID) });
};

const updateRecipe = async (recipeDataToChange) => {};

module.exports = { findRecipeById, getAllRecipes, addNewRecipe };
