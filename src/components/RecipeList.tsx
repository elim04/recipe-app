import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList: React.FC = () => {
  return (
    <div>
      <RecipeListItem />
      <RecipeListItem />
      <RecipeListItem />
    </div>
  );
};

export default RecipeList;
