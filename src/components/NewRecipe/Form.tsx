import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./Form.css";

type IngredientFormValues = {
  name: string;
  cookware: string[];
  servingSize: number;
  ingredient: {
    name: string;
    amount: number;
    measurement: string;
  }[];
};

const Form = () => {
  //react form hook implementation
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IngredientFormValues>({
    defaultValues: {
      ingredient: [{ name: "test-ingredient", amount: 1, measurement: "cup" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
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

        {fields.map((field, index) => {
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
              <Button type="button" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
          );
        })}
        <Button
          onClick={() => append({ name: "", amount: 0, measurement: "" })}
        >
          Add New Ingredient
        </Button>
        <Button type="submit">Submit</Button>
      </form>
      <Button type="button" onClick={handleClickHome}>
        Go back Home
      </Button>
    </div>
  );
};

export default Form;
