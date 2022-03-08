const findRecipeById = (recipeID, recipeData) => {
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
