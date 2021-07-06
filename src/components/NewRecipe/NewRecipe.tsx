import { Recipe } from "../../recipe.model";

import Form from "./Form";

type NewRecipeProps = {
  onAddRecipe: (recipe: Recipe) => void;
};

const NewRecipe: React.FC<NewRecipeProps> = ({ onAddRecipe }) => {
  const recipeSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>Add New Recipe</p>
      <Form onAddRecipe={onAddRecipe} />
    </div>
  );
};

export default NewRecipe;
