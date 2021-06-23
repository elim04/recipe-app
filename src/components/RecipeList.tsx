import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../recipe.model";

//describes props for this component
interface RecipeListProps {
  recipesData: Recipe[];
  onAddRecipe: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = (props) => {
  return (
    <div>
      {props.recipesData.map((recipeItem) => {
        return (
          <RecipeListItem
            recipeName={recipeItem.name}
            servingSize={recipeItem.servingSize}
          />
        );
      })}
    </div>
  );
};

export default RecipeList;
