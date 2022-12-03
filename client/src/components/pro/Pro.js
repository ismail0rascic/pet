import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import dogpaw from "../../images/dogpaw.png";

const Pro = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        className="pretplateDiv"
        style={{ display: "inline-flex", marginLeft: "30%", marginTop: "14%" }}
      >
        <div
          className="pretplata1"
          style={{
            background: "#74232379",
            borderRadius: "10%",
            height: "320px",
            width: "220px",
          }}
        >
          <span style={{ marginLeft: "35%", fontSize: "30px" }}>Starter</span>
          <h2 style={{ color: "white", marginLeft: "40%", fontSize: "30px" }}>
            10 $
          </h2>
          <h4
            style={{
              color: "white",
              borderTop: "1px solid white",
              fontSize: "15px",
            }}
          >
            The starter package offers the service <br />
            of performing all the tasks that our application offers
          </h4>
          <Button
            onClick={handleClickOpen}
            style={{
              color: "white",
              border: "2px solid black",
              marginLeft: "30%",
              marginTop: "25%",
            }}
          >
            {" "}
            SIGN UP
          </Button>
        </div>

        <div
          className="pretplata1"
          style={{
            background: "#7423239a",
            borderRadius: "10%",
            marginLeft: "15px",
            height: "320px",
            width: "220px",
          }}
        >
          <span style={{ marginLeft: "35%", fontSize: "30px" }}>Basic</span>
          <h2 style={{ color: "white", marginLeft: "40%", fontSize: "30px" }}>
            20 $
          </h2>
          <h4
            style={{
              color: "white",
              borderTop: "1px solid white",
            }}
          >
            The Medium package offers the service
            <br /> of performing all the tasks that our application offers + a
            GPS collar for tracking your <br />
            pet{" "}
            <span style={{ color: "blue", textDecoration: "underline" }}>
              with a discount of 50%
            </span>{" "}
            on the regular price of the collar
          </h4>
          <Button
            onClick={handleClickOpen}
            style={{
              color: "white",
              border: "2px solid black",
              marginLeft: "30%",
            }}
          >
            {" "}
            SIGN UP
          </Button>
        </div>

        <div
          className="pretplata1"
          style={{
            background: "#742323da",
            borderRadius: "10%",
            height: "320px",
            width: "220px",
            marginLeft: "15px",
          }}
        >
          <span style={{ marginLeft: "35%", fontSize: "30px" }}>PRO</span>
          <h2 style={{ color: "white", marginLeft: "40%", fontSize: "30px" }}>
            30 $
          </h2>
          <h4 style={{ color: "white", borderTop: "1px solid white" }}>
            The Medium package offers the service
            <br /> of performing all the tasks that our application offers + a
            GPS collar for tracking your <br />
            pet{" "}
            <span style={{ color: "blue", textDecoration: "underline" }}>
              with a discount of 70%
            </span>{" "}
            on the regular price of the collar
          </h4>
          <Button
            classes="BtnSignUp"
            onClick={handleClickOpen}
            style={{
              color: "white",
              border: "2px solid black",
              marginLeft: "30%",
            }}
          >
            {" "}
            SIGN UP
          </Button>
        </div>
      </div>
      <h5 style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
        NOTE, THE NORMAL PRICE OF A GPS NECKLACE IS $60
      </h5>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent style={{ backgroundColor: "#A3653C" }}>
            <DialogContentText
              id="alert-dialog-description"
              style={{ color: "white" }}
            >
              Please Sign Up
              <Stack
                component="form"
                sx={{
                  width: "25ch",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Name"
                  variant="filled"
                  size="small"
                  style={{ backgroundColor: "white" }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Email"
                  variant="filled"
                  size="small"
                  style={{ backgroundColor: "white" }}
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Password"
                  variant="filled"
                  size="small"
                  style={{ backgroundColor: "white" }}
                />
              </Stack>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ backgroundColor: "#A3653C" }}>
            <Button style={{ color: "white" }} onClick={handleClose}>
              SAVE
            </Button>

            <img
              src={dogpaw}
              style={{ width: "100px", marginLeft: "30%", color: "white" }}
            />
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Pro;
