import { TextField, Typography } from "@material-ui/core";

const Field = ({ data, values, setValues, item }) => {
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <TextField
        id={data.id}
        type={data.type}
        label={data.label}
        className={data.class}
        //inputvalue={data.value}
        value={data.value}
        onChange={handleChange(data.id)}
        margin="normal"
      />

      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
      <br />
    </>
  );
};

export default Field;
