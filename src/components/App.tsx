import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import RecipeList from "./RecipeList/RecipeList";
import NewRecipe from "./NewRecipe/NewRecipe";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Recipe } from "../recipe.model";
import { RecipeListObj } from "../recipeList.model";

import "./App.css";

//test data
import { data } from "../testdata";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeListObj>(data);

  const onAddRecipe = (recipe: Recipe) => {
    let recipeKey = Math.floor(Math.random() * 10000);

    setRecipes((prevRecipes: RecipeListObj) => {
      return {
        ...prevRecipes,
        [recipeKey]: recipe,
      };
    });
  };

  const deleteRecipe = (recipeID: number) => {
    let { [recipeID]: omit, ...res } = recipes;
    setRecipes(res);
  };

  useEffect(() => {
    console.log("recipe added");
  }, [recipes]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <RecipeList recipesData={recipes} deleteRecipe={deleteRecipe} />
            <div>
              <h3>Add new recipe!</h3>
              <Link to="/newrecipe">
                <Button>Add Recipe</Button>
              </Link>
            </div>
          </Route>
          <Route path="/newrecipe">
            <NewRecipe onAddRecipe={onAddRecipe} />
          </Route>
          <Route path="/recipe/:recipe_id">
            <RecipeCard recipesData={recipes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
