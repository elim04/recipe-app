const _ = require("lodash");

// break up this file to move everythign to model files

// Mongodb setup
const { getDatabase } = require("../db");

// Recipe Helpers

const getAllRecipes = async () => {
  const db = await getDatabase();
  return await db.collection("recipes").find({});
};

const findRecipeById = async (recipeID) => {
  const db = await getDatabase();
  return await db.collection("recipes").find({ recipe_id: recipeID });
};

module.exports = { findRecipeById, getAllRecipes };
