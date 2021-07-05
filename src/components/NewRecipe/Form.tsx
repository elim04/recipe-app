import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./Form.css";

type Name = {
  name: string;
};

type IngredientFormValues = {
  name: string;
  servingSize: number;
  ingredient: {
    name: string;
    amount: number;
    measurement: string;
  }[];
  cookware: Array<Name>;
};

const Form = () => {
  //react form hook implementation
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IngredientFormValues>({
    mode: "all",
  });

  //for dynamic cookware

  const {
    fields: cookwareFields,
    append: cookwareAppend,
    remove: cookwareRemove,
  } = useFieldArray({ name: "cookware", control });

  //for dynamic ingredient form
  const {
    fields: ingredientFields,
    append: ingredientAppend,
    remove: ingredientRemove,
  } = useFieldArray({
    name: "ingredient",
    control,
  });

  const onSubmit = (data: IngredientFormValues) => console.log(data);

  //handle home button
  let history = useHistory();

  function handleClickHome() {
    history.push("/");
  }

  return (
    <div>
      <form className="new-recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Recipe Name"
          variant="outlined"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <TextField
          id="outlined-basic"
          label="Serving Size"
          type="number"
          variant="outlined"
          {...register("servingSize", { required: true, min: 1 })}
        />
        {errors.servingSize && <span>This field is required</span>}
        <h3>COOKWARE</h3>
        {cookwareFields.map((field, index) => {
          return (
            <div key={field.id}>
              <TextField
                id="outlined-basic"
                label="Cookware Utensils"
                variant="outlined"
                type="text"
                {...register(`cookware.${index}.name` as const)}
              />
            </div>
          );
        })}
        <h3>INGREDIENTS</h3>
        {ingredientFields.map((field, index) => {
          return (
            <div key={field.id}>
              <TextField
                id="outlined-basic"
                label="Ingredient Name"
                variant="outlined"
                type="text"
                {...register(`ingredient.${index}.name` as const)}
              />
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                type="number"
                {...register(`ingredient.${index}.amount`)}
              />
              <TextField
                id="outlined-basic"
                label="Measurement"
                variant="outlined"
                {...register(`ingredient.${index}.measurement`)}
              />
              <Button type="button" onClick={() => ingredientRemove(index)}>
                Remove
              </Button>
            </div>
          );
        })}
        <Button
          onClick={() =>
            ingredientAppend({ name: "", amount: 0, measurement: "" })
          }
        >
          Add New Ingredient
        </Button>
        <h3>INSTRUCTIONS</h3>
        <Button type="submit">Submit</Button>
      </form>
      <Button type="button" onClick={handleClickHome}>
        Go back Home
      </Button>
    </div>
  );
};

export default Form;
