import React from "react";
import "./RecipeList.css";
import RecipeListItem from "./RecipeListItem";
import { RecipeListObj } from "../../recipeList.model";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//describes props for this component
interface RecipeListProps {
  recipesData: RecipeListObj;
  deleteRecipe: (recipe: number) => void;
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
}) => {
  const classes = useStyles();

  const recipesArray = Object.keys(recipesData);
  return (
    <div className="container">
      {recipesArray.map((recipeItem) => {
        //convert string to number for recipedata id to search for right recipe
        let recipeItemId = parseInt(recipeItem, 10);

        return (
          <Card key={recipeItemId} className={classes.root}>
            <CardContent>
              <RecipeListItem
                key={recipeItemId}
                recipeName={recipesData[recipeItemId]["name"]}
                servingSize={recipesData[recipeItemId]["servingSize"]}
              />
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                onClick={deleteRecipe.bind(null, recipeItemId)}
              >
                Delete
              </Button>
              <Link to={`/recipe/${recipeItemId}`}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  size="small"
                >
                  View
                </Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipeList;
