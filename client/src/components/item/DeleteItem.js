import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteItem } from "../../actions/itemActions";
const DeleteDialog = (props) => {
  const navigate = useNavigate();
  return (
    <span>
      <Dialog open={props.open} onClose={props.handleRequestClose}>
        <DialogTitle>Delete {props.item.name}</DialogTitle>
        <DialogContent style={{ display: "flex" }}>
          <DeleteIcon fontSize="large" />
          <DialogContentText style={{ padding: 7 }}>
            Confirm to delete {props.item.name}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => deleteItem(props.item._id, navigate)}
            color="secondary"
            autoFocus="autoFocus"
          >
            Confirm
          </Button>
          <Button onClick={props.handleRequestClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
};

export default DeleteDialog;
