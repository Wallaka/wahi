import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, TextField, Button, Box } from "@mui/material";

type Inputs = {
  name: string;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    console.log("inputs ? ", inputs);

    // Do smt
  };

  return (
    <Box sx={{ padding: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} sm={10} paddingBottom={2}>
          <TextField
            required
            id="name"
            label="Name"
            fullWidth
            size="small"
            autoComplete="off"
            variant="outlined"
            {...register("name", { required: true, maxLength: 32 })}
          />
          {errors?.name?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              The name must not exceed 32 characters
            </p>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" type="submit">
            Create the task
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
