import { connect } from "react-redux";

import useStyles from "../../styles/style";
import { Typography } from "@mui/material";
import CategoriesList from "./CategoriesList";
import { Stack } from "@mui/system";

const Categories = (props) => {
  const classes = useStyles();

  return (
    <Stack alignItems="center">
      <Typography variant="h6" className={classes.title}>
        Categories
      </Typography>
      <CategoriesList
        filter={props.filter}
        categories={props.categories}
        setCategory={props.setCategory}
      />
    </Stack>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  categories: state.categoryR,
  filter: state.filterR,
});
export default connect(mapStateToProps)(Categories);
