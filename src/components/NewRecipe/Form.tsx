import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";

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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
