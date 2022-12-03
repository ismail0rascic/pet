import { useEffect } from "react";
import { connect } from "react-redux";

import ItemList from "./ItemList";
import AddItemButton from "./AddItemButton";
import { Grid, Typography } from "@material-ui/core";

import { getItems } from "../../actions/itemActions";

const Items = (props) => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        {props.auth.isAuthenticated && <AddItemButton />}
        {props.category && (
          <Typography variant="h6">{props.category.toUpperCase()}</Typography>
        )}
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ItemList category={props.category} />
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
});
export default connect(mapStateToProps)(Items)
