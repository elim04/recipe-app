import React from "react";
import "./RecipeList.css";
import RecipeListItem from "./RecipeListItem";
import { RecipeListArray } from "../../recipeList.model";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Button } from "@material-ui/core";
import axios from "axios";
import { Recipe } from "../../recipe.model";
import { useHistory } from "react-router-dom";
//describes props for this component
interface RecipeListProps {
  recipesData: RecipeListArray;
  deleteRecipe: (recipe: number) => void;
  setRecipe: (recipe: Recipe) => void;
  currentRecipe: Recipe | undefined;
}

const useStyles = makeStyles({
  root: {
    width: 275,
    backgroundColor: "rgb(221 227 255 / 87%)",
  },
  button: {
    backgroundColor: "white",
  },
});

const RecipeList: React.FC<RecipeListProps> = ({
  recipesData,
  deleteRecipe,
  setRecipe,
  currentRecipe,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const getRecipe = (recipe_id: string) => {
    axios.get(`/api/recipes/${recipe_id}`).then((res) => {
      setRecipe(res.data);
      history.push(`/recipe/${recipe_id}`);
    });
  };

  return (
    <div className="container">
      {recipesData.map((recipeItem, i) => {
        return (
          <Card key={i} className={classes.root}>
            <CardContent>
              <RecipeListItem
                recipeName={recipeItem["name"]}
                servingSize={recipeItem["servingSize"]}
              />
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                // onClick={deleteRecipe.bind(null, recipeItem)}
              >
                Delete
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                onClick={() => getRecipe(recipeItem._id)}
              >
                View
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipeList;
