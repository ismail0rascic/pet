import { connect } from "react-redux";

import { Grid } from "@material-ui/core";
import Item from "./Item";
const ItemList = (props) => {

console.log(props.filter);
  return (
    <Grid container spacing={2}>
      {props.items && //eslint-disable-next-line
        props.items.map((item) => {
          if (props.filter.category && props.filter.option === false) {
            if (props.filter.category === item.category)
              return <Item key={item._id} item={item} />;
          } else if (props.filter.option && props.filter.category === false) {
            if (props.filter.option === item.option)
              return <Item key={item._id} item={item} />;
          } else if (props.filter.option && props.filter.category) {
            if (
              props.filter.category === item.category &&
              props.filter.option === item.option
            )
              return <Item key={item._id} item={item} />;
          } else {
            return <Item key={item._id} item={item} />;
          }
        })}
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  items: state.itemR,
  filter: state.filterR,
});
export default connect(mapStateToProps)(ItemList);
