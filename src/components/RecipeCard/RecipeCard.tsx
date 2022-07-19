import React from "react";
import "./RecipeCard.css";
import Cookware from "./CookwareSection";
import InstructionsSection from "./InstructionsSection";
import IngredientsSection from "./IngredientsSection";
import { RecipeListArray } from "../../recipeList.model";
import { Recipe } from "../../recipe.model";
import { Typography } from "@material-ui/core";
interface RecipeCardProps {
  recipeData: Recipe;
}

interface ParamTypes {
  recipe_id: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipeData }) => {
  return (
    <div className="recipe">
      <Typography variant="h2">{recipeData["name"]}</Typography>
      <Cookware cookwareData={recipeData["cookware"]} />
      <IngredientsSection ingredientsData={recipeData["ingredients"]} />
      <InstructionsSection instructionsData={recipeData["instructions"]} />
    </div>
  );
};

export default RecipeCard;
