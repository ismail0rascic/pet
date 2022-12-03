import { connect } from "react-redux";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@material-ui/core";
import useRefresh from "../../customHooks/useRefresh";
import useStyles from "../../styles/style";
import { refreshOptions } from "../../actions/optionsActions";

const ChoseOption = (props) => {
  const classes = useStyles();
  useRefresh("options", props.options, refreshOptions);

  const getOptionsNames = () => {
    let names = [];
    //eslint-disable-next-line
    props.options.map((option) => {
      names.push(option.name);
    });
    return names;
  };

  let optionsNames = getOptionsNames();
  console.log(props.options);
  return (
    <>
      <Autocomplete
        className={classes.textField}
        options={optionsNames}
        value={props.item && props.item}
        onInputChange={(event, newInputValue) => {
          props.setValues({ ...props.values, option: newInputValue });
        }}
        renderInput={(params) => <TextField label="Chose Option" {...params} />}
      />
      {props.values && props.values.errors && (
        <Typography component="p" color="error">
          {props.values.errors.option}
        </Typography>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  options: state.optionR,
});
export default connect(mapStateToProps)(ChoseOption);
