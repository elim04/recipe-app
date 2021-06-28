import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import RecipeList from "./RecipeList";
import NewRecipe from "./NewRecipe";
import { Recipe } from "../recipe.model";
import { RecipeListObj } from "../recipeList.model";

import "./App.css";

//test data
import { data } from "../testdata";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeListObj>(data);

  const onAddRecipe = (recipe: Recipe) => {
    let recipeKey = Math.floor(Math.random() * 100);
    setRecipes((prevRecipes: RecipeListObj) => {
      return {
        ...prevRecipes,
        recipeKey: recipe,
      };
    });
  };

  const deleteRecipe = (recipeID: number) => {
    let { [recipeID]: omit, ...res } = recipes;
    setRecipes(res);
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
