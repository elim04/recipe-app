// Mongodb setup
const { getDatabase } = require("../db");
// Recipe Helpers

const getAllRecipes = async () => {
  const db = await getDatabase();
  const recipes = await db.collection("recipes").find().toArray();
  return recipes;
};

const findRecipeById = async (recipeID) => {
  const db = await getDatabase();
  return await db.collection("recipes").find({ recipe_id: recipeID });
};

const addNewRecipe = async (recipeData) => {
  const db = await getDatabase();

  console.log("recipe data from add new recipe:", recipeData);
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

const updateRecipe = async (recipeDataToChange) => {};

module.exports = { findRecipeById, getAllRecipes, addNewRecipe };
