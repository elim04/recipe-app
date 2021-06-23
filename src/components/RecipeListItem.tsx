import React from "react";

interface RecipeListItemProps {
  recipeName: string;
  servingSize: number;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({
  recipeName,
  servingSize,
}) => {
  return (
    <div>
      <h3>{recipeName}</h3>
      <p>Serving Size: {servingSize}</p>
    </div>
  );
};

export default RecipeListItem;
