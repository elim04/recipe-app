import React from "react";
import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../recipe.model";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";

//describes props for this component
interface RecipeListProps {
  recipesData: Recipe[];
  onAddRecipe: (recipe: Recipe) => void;
}

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
    backgroundColor: "rgb(221 227 255 / 87%)",
  },
});

const RecipeList: React.FC<RecipeListProps> = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.recipesData.map((recipeItem) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <RecipeListItem
                key={recipeItem.id}
                recipeName={recipeItem.name}
                servingSize={recipeItem.servingSize}
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipeList;
