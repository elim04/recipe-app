const findRecipeById = (recipeID, recipeData) => {
  for (let recipe of recipeData) {
    if (recipe.recipe_id === recipeID) {
      return recipe;
    } else {
      throw new Error("No recipe found");
    }
  }
};

const findIngredientById = (ingredientID, ingredientData) => {
  const foundIngredient = ingredientData.find(
    (ingredient) => ingredient["id"] === ingredientID
  );

  if (foundIngredient) {
    return foundIngredient;
  } else {
    throw new Error("No ingredient found");
  }
};

module.exports = { findRecipeById, findIngredientById };