import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../recipe.model";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";

//describes props for this component
interface RecipeListProps {
  recipesData: Recipe[];
  onAddRecipe: (recipe: Recipe) => void;
  deleteRecipe: (recipe: number) => void;
}

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
    backgroundColor: "rgb(221 227 255 / 87%)",
  },
});

const RecipeList: React.FC<RecipeListProps> = ({
  recipesData,
  onAddRecipe,
  deleteRecipe,
}) => {
  const classes = useStyles();

  return (
    <div>
      {recipesData.map((recipeItem) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <RecipeListItem
                key={recipeItem.id}
                recipeName={recipeItem.name}
                servingSize={recipeItem.servingSize}
              />
              <button onClick={deleteRecipe.bind(null, recipeItem.id)}>
                Delete
              </button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipeList;
