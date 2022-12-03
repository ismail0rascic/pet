import { Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import Options from "../categories/Options";
import Categories from "../categories/Categories";

import { setFilterC, setFilterO } from "../../actions/filterActions";
const Filters = (props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Categories setCategory={props.setCategory} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Options setCategory={props.setCategory} />
        </Grid>
      </Grid>
      <Stack justifyContent="center">
        <Button
          color="error"
          onClick={() => {
            setFilterC({ category: undefined });
            setFilterO({ option: undefined });
          }}
          variant="outlined"
        >
          Remove filter
        </Button>
      </Stack>
    </>
  );
};

export default Filters;
