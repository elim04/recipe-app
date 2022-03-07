const findRecipeById = (recipeID, recipeData) => {
  for (let recipe of recipeData) {
    if (recipe.recipe_id === recipeID) {
      return recipe;
    } else {
      throw new Error("No recipe found");
    }
  }
};

module.exports = { findRecipeById };
