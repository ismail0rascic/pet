import React, { useState } from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";
import DeleteItem from "./DeleteItem";
import { Stack } from "@mui/system";

import useStyles from "../../styles/style";
import { Typography } from "@mui/material";

const DeleteButton = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const clickButton = () => setOpen(true);
  const handleRequestClose = () => setOpen(false);

  return (
    <Stack style={{ width: "50%" }}>
      <Button onClick={clickButton} className={classes.button}>
        <Typography variant="h5" style={{ color: "red" }}>
          DELETE ITEM
        </Typography>
      </Button>
      <DeleteItem
        open={open}
        handleRequestClose={handleRequestClose}
        item={props.item}
      />
    </Stack>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(DeleteButton);
