import React, { useState } from "react";
import RecipeList from "./RecipeList";
import { Recipe } from "../recipe.model";

import "./App.css";

//test data
import { data } from "../testdata";

const App: React.FC = () => {
  //need to fix the any types
  const [recipes, setRecipes] = useState<any>(data);

  const onAddRecipe = (recipe: Recipe) => {
    setRecipes((prevRecipes: Recipe[]) => [...prevRecipes, recipe]);
  };

  return (
    <div className="App">
      <RecipeList recipesData={recipes} onAddRecipe={onAddRecipe} />
    </div>
  );
};

export default App;
