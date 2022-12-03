import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";
import BarItems from "./BarItems";
import { IconButton } from "@material-ui/core";
import Pets from "@material-ui/icons/Pets";
import "../../styles/style.css";

//import useStyles from "../../styles/style";
import { getUser } from "../../actions/userActions";
const ApplicationBar = (props) => {
  //const classes = useStyles();

  console.log(props.user);

  const navigate = useNavigate();
  useEffect(() => {
    getUser(props.auth.user.id);
    // eslint-disable-next-line
  }, [props.auth.user.id]);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 20 }}>
      <AppBar position="static" className="box">
        <Toolbar className="bar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton onClick={() => navigate("/")}>
              <Pets style={{ color: "white" }} />
            </IconButton>
            PET Lovers <br />
          </Typography>
          {<BarItems />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  user: state.userR,
});
export default connect(mapStateToProps)(ApplicationBar);
