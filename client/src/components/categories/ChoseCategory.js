import { connect } from "react-redux";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@material-ui/core";
import useRefresh from "../../customHooks/useRefresh";

import useStyles from "../../styles/style";
import { refreshCategories } from "../../actions/categoriesActions";

const ChoseCategory = (props) => {
  const classes = useStyles();
  useRefresh("categories", props.categories, refreshCategories);

  const getCategoriesNames = () => {
    let names = [];
    //eslint-disable-next-line
    props.categories.map((category) => {
      names.push(category.name);
    });
    return names;
  };

  let categoriesNames = getCategoriesNames();

  return (
    <>
      <Autocomplete
        className={classes.textField}
        options={categoriesNames}
        value={props.item && props.item}
        onInputChange={(event, newInputValue) => {
          props.setValues({ ...props.values, category: newInputValue });
        }}
        renderInput={(params) => (
          <TextField label="Chose category" {...params} />
        )}
      />
      {props.values && props.values.errors && (
        <Typography component="p" color="error">
          {props.values.errors.category}
        </Typography>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoryR,
});
export default connect(mapStateToProps)(ChoseCategory);
