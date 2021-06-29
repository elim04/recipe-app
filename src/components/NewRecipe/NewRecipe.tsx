import { Recipe } from "../../recipe.model";

import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";

type NewRecipeProps = {
  onAddRecipe: (recipe: Recipe) => void;
};

const NewRecipe: React.FC<NewRecipeProps> = ({ onAddRecipe }) => {
  const recipeSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={recipeSubmitHandler}>
      <h3>Add a New Recipe</h3>
      <TextField id="outlined-basic" label="Recipe Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Serving Size"
        type="number"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="" />
      <Button>Submit</Button>
    </form>
  );
};

export default NewRecipe;
