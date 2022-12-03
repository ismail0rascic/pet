import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import Filters from "../filter/Filters";
import Items from "../item/Items";

import { getCategories } from "../../actions/categoriesActions";
import { getOptions } from "../../actions/optionsActions";

const Home = (props) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    getCategories();
    getOptions();
  }, []);

  useEffect(() => {
    props.categories.length > 0 && setCategory(props.categories[0].name);
  }, [props.categories]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} lg={3}>
        <Filters setCategory={setCategory} />
      </Grid>
      <Grid item xs={12} md={9} lg={9}>
        <Items category={category} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  categories: state.categoryR,
});
export default connect(mapStateToProps)(Home);
