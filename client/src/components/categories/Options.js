import { connect } from "react-redux";

import useStyles from "../../styles/style";
import { Typography } from "@mui/material";
import OptionsList from "./OptionsList";
import { Stack } from "@mui/system";

const Options = (props) => {
  const classes = useStyles();

  return (
    <Stack alignItems="center">
      <Typography variant="h6" className={classes.title}>
        Options
      </Typography>
      <OptionsList
        filter={props.filter}
        options={props.options}
        setCategory={props.setCategory}
      />
    </Stack>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  options: state.optionR,
  filter: state.filterR,
});
export default connect(mapStateToProps)(Options);
