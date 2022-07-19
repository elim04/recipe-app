import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import RecipeList from "./RecipeList/RecipeList";
import NewRecipe from "./NewRecipe/NewRecipe";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Recipe } from "../recipe.model";
import { RecipeListArray } from "../recipeList.model";

import "./App.css";

import axios from "axios";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeListArray>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>();

  const onAddRecipe = (recipe: Recipe) => {
    let recipeKey = Math.floor(Math.random() * 10000);

    setRecipes((prevRecipes: RecipeListArray) => {
      return [...prevRecipes, recipe];
    });

    axios
      .post("/api/recipes", { recipe })
      .then((res) => console.log("from axios", res));
  };

  const deleteRecipe = (recipeID: number) => {
    let { [recipeID]: omit, ...res } = recipes;
    setRecipes(res);
  };

  useEffect(() => {
    axios.get("/api/recipes").then((res) => {
      setRecipes(res.data);
    });
  }, [setRecipes]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <RecipeList
              recipesData={recipes}
              deleteRecipe={deleteRecipe}
              setRecipe={setCurrentRecipe}
              currentRecipe={currentRecipe}
            />
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
            {currentRecipe && <RecipeCard recipeData={currentRecipe} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
