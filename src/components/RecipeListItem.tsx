import React from "react";

import { makeStyles } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";

interface RecipeListItemProps {
  recipeName: string;
  servingSize: number;
}

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
    backgroundColor: "rgb(221 227 255 / 87%)",
  },
});

const RecipeListItem: React.FC<RecipeListItemProps> = ({
  recipeName,
  servingSize,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <h3>{recipeName}</h3>
        <p>Serving Size: {servingSize}</p>
      </CardContent>
    </Card>
  );
};

export default RecipeListItem;
