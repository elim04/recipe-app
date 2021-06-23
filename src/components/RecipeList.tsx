import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../recipe.model";
interface RecipeListProps {
  recipesData: Recipe[];
  onAddRecipe: (recipe: any) => void;
}

const RecipeList: React.FC<RecipeListProps> = (props) => {
  return (
    <div>
      {props.recipesData.map((recipeItem) => {
        return <div>{recipeItem.name}</div>;
      })}
      <RecipeListItem />
      <RecipeListItem />
      <RecipeListItem />
    </div>
  );
};

export default RecipeList;
