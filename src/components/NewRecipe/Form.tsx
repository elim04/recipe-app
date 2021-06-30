import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

import "./Form.css";
interface Inputs {
  name: string;
  servingSize: number;
  cookware: string;
  ingredient: string;
  measurement: string;
  amount: number;
  instruction: string;
}

const Form = () => {
  //state for dynamic form to add ingredients, cookware and instructions

  const blankIngredient = { name: "", amount: null, measurement: "" };

  const [ingredientState, setIngredientState] = useState([
    { ...blankIngredient },
  ]);

  const addIngredient = () => {
    setIngredientState([...ingredientState, { ...blankIngredient }]);
  };
  //react form hook implementation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        {ingredientState.map((val, index) => {
          const ingredientId = `name-${index}`;
          const amountId = `amount-${index}`;
          const measurementId = `measurement-${index}`;

          return (
            <div key={`input-${index}`}>
              <TextField
                id="outlined-basic"
                label="Ingredient Name"
                variant="outlined"
                {...register("ingredient")}
              />
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                type="number"
                {...register("amount")}
              />
              <TextField
                id="outlined-basic"
                label="Measurement"
                variant="outlined"
                {...register("measurement")}
              />
            </div>
          );
        })}
        <Button onClick={addIngredient}>Add New Ingredient</Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
