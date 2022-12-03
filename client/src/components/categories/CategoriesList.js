import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { setFilterC } from "../../actions/filterActions";

const CategoriesList = (props) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {props.categories &&
          props.categories.map((category, i) => {
            return (
              <FormControlLabel
                onClick={() => {
                  setFilterC({ category: category.name });
                }}
                value={props.filter.option !== undefined && category.name}
                key={category._id}
                control={<Radio />}
                label={category.name}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
};
export default CategoriesList;
