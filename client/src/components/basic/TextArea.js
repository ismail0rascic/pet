import { Typography } from "@material-ui/core";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const TextArea = ({ data, values, setValues, item }) => {
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <TextareaAutosize
        id={data.id}
        minRows={7}
        placeholder={data.label}
        className={data.class}
        value={data.value}
        onChange={handleChange(data.id)}
        margin="normal"
        style={{ maxHeight: 200, overflow: "auto" }}
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

export default TextArea;
