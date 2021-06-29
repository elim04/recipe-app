import React from "react";
import { useParams } from "react-router-dom";
import Cookware from "./CookwareSection";
import InstructionsSection from "./InstructionsSection";
import IngredientsSection from "./IngredientsSection";
import { RecipeListObj } from "../../recipeList.model";
import { Recipe } from "../../recipe.model";

interface RecipeCardProps {
  recipesData: RecipeListObj;
}

interface ParamTypes {
  recipe_id: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipesData }) => {
  let { recipe_id } = useParams<ParamTypes>();

  let recipeId = parseInt(recipe_id);

  let recipeCardData: Recipe = recipesData[recipeId];

  return (
    <div>
      <p>{recipesData[recipeId]["name"]}</p>
      <Cookware cookwareData={recipeCardData["cookware"]} />
      <IngredientsSection ingredientsData={recipeCardData["ingredients"]} />
      <InstructionsSection instructionsData={recipeCardData["instructions"]} />
    </div>
  );
};

export default RecipeCard;
