import { Grid, Paper } from "@material-ui/core";
import { Typography, Stack } from "@mui/material";
import MoreButton from "./MoreButton";
import  Img  from "./Img";
const Item = ({ item }) => {
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Paper>
        <Stack alignItems="center">
          <Img
            src={item.image && require("../../images/" + item.image)}
            alt="item img"
          ></Img>
          <Typography>{item.name}</Typography>
          <MoreButton item={item} />
        </Stack>
      </Paper>
    </Grid>
  );
};
export default Item;
