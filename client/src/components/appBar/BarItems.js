import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { Typography } from "@mui/material";

const BarItems = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          navigate("catalog");
        }}
        color="inherit"
      >
        Home
      </Button>
      {props.auth.isAuthenticated ? (
        <Button
          onClick={() => {
            signOut();
          }}
          color="inherit"
        >
          Log Out
        </Button>
      ) : (
        <Button
          onClick={() => {
            navigate("/login");
          }}
          color="inherit"
        >
          Login
        </Button>
      )}
      <Button
        style={{ color: "gold" }}
        onClick={() => {
          navigate("/pro");
        }}
        color="inherit"
        variant="outlined"
      >
        <Typography variant="h6">
          <StarIcon /> Pet Lover PRO
        </Typography>
      </Button>
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authR,
});
export default connect(mapStateToProps)(BarItems);
