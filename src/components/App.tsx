import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import RecipeList from "./RecipeList";
import NewRecipe from "./NewRecipe";
import { Recipe } from "../recipe.model";

import "./App.css";

//test data
import { data } from "../testdata";

const App: React.FC = () => {
  //need to fix the any stypes
  const [recipes, setRecipes] = useState<any>(data);

  const onAddRecipe = (recipe: Recipe) => {
    setRecipes((prevRecipes: Recipe[]) => [...prevRecipes, recipe]);
  };

  const deleteRecipe = (recipeID: number) => {
    setRecipes((prevRecipes: Recipe[]) => {
      return prevRecipes.filter((recipe) => recipe.id !== recipeID);
    });
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RecipeList
              recipesData={recipes}
              onAddRecipe={onAddRecipe}
              deleteRecipe={deleteRecipe}
            />
          </Route>
          <Route path="/newrecipe">
            <NewRecipe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
