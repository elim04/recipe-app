import React from "react";
import "./RecipeCard.css";
import { useParams } from "react-router-dom";
import Cookware from "./CookwareSection";
import InstructionsSection from "./InstructionsSection";
import IngredientsSection from "./IngredientsSection";
import { RecipeListArray } from "../../recipeList.model";
import { Recipe } from "../../recipe.model";
import { Typography } from "@material-ui/core";
interface RecipeCardProps {
  recipesData: RecipeListArray;
}

interface ParamTypes {
  recipe_id: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipesData }) => {
  let { recipe_id } = useParams<ParamTypes>();

  let recipeId = parseInt(recipe_id);

  let recipeCardData: Recipe = recipesData[recipeId];

  return (
    <div className="recipe">
      <Typography variant="h2">{recipesData[recipeId]["name"]}</Typography>
      <Cookware cookwareData={recipeCardData["cookware"]} />
      <IngredientsSection ingredientsData={recipeCardData["ingredients"]} />
      <InstructionsSection instructionsData={recipeCardData["instructions"]} />
    </div>
  );
};

export default RecipeCard;
