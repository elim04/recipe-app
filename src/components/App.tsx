import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import RecipeList from "./RecipeList";
import NewRecipe from "./NewRecipe";
import { Recipe } from "../recipe.model";

import "./App.css";

//test data
import { data } from "../testdata";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any>(data);
  console.log(recipes);

  const onAddRecipe = (recipe: Recipe) => {
    // let recipeKey = Math.floor(Math.random()*100);
    // setRecipes((prevRecipes) => {...prevRecipes, prevRecipes[recipeKey] = recipe});
  };

  const deleteRecipe = (recipeID: number) => {
    // setRecipes((prevRecipes: Recipe[]) => {
    //   return prevRecipes.filter((recipe) => recipe.id !== recipeID);
    // });
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RecipeList recipesData={recipes} deleteRecipe={deleteRecipe} />
            <div>
              <h3>Add new recipe!</h3>
              <Link to="/newrecipe">
                <button>Add Recipe</button>
              </Link>
            </div>
          </Route>
          <Route path="/newrecipe">
            <NewRecipe onAddRecipe={onAddRecipe} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
