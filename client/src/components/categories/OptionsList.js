import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { setFilterO } from "../../actions/filterActions";

const OptionsList = (props) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {props.options &&
          props.options.map((option) => {
            return (
              <FormControlLabel
                onClick={() => {
                  setFilterO({ option: option.name });
                }}
                value={props.filter.option !== undefined && option.name}
                key={option._id}
                control={<Radio />}
                label={option.name}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
};
export default OptionsList;
