import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import PetsIcon from "@material-ui/icons/Pets";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateItem } from "../../actions/itemActions";
import useRefresh from "../../customHooks/useRefresh";
import { refreshItems } from "../../actions/itemActions";

const ItemPage = (props) => {
  const id = useParams().id;
  const item = props.items.find((o) => o._id === id);
  const navigate = useNavigate();

  useRefresh("items", props.items, refreshItems);

  return (
    <>
      {item && (
        <Box
          style={{
            // background: `url(${background})`,
            height: "120vh",
            width: "78vw",
            padding: "10%",
          }}
        >
          <Card sx={{ width: "80%", margin: "auto" }}>
            <CardContent
              sx={{ width: "85%", margin: "auto", marginTop: "20px" }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ fontFamily: "Kalam" }}
              >
                About Pet
              </Typography>
              <Typography
                variant="subtitle"
                sx={{
                  fontFamily: "Quicksand",
                  "@media(max-width: 425px)": {
                    fontSize: "0.7em",
                  },
                  "@media(min-width: 768px)": {
                    fontSize: "1.2em",
                  },
                }}
              >
                {item.desc}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt="dog"
              height="54%"
              sx={{ margin: "auto", width: "85%" }}
              //image={dog}
            />
            <CardContent
              sx={{ width: "85%", margin: "auto", marginTop: "20px" }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Kalam" }}
              >
                Pet Information
              </Typography>
              <Divider sx={{ marginBottom: "10px" }} />
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{
                  fontFamily: "Quicksand",
                  "@media(max-width: 425px)": {
                    fontSize: "0.7em",
                  },
                  "@media(min-width: 768px)": {
                    fontSize: "1.2em",
                  },
                }}
              >
                <Grid item xs={2} sm={4} md={4}>
                  <strong>Type</strong>
                  <br />
                  {item.category}
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <strong>Location</strong>
                  <br />
                  Sarajevo
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <strong>Award</strong>
                  <br />
                  {item.award ? item.award + "$" : "0$"}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              {props.auth.isAuthenticated &&
                props.auth.user.id === item.userId && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      updateItem({ id: item._id, status: "founded" }, navigate);
                    }}
                    sx={{
                      margin: "auto",
                      marginTop: "20px",
                      marginBottom: "40px",
                      width: "160px",
                      height: "50px",
                      fontSize: "1em",
                      backgroundColor: "green",
                      borderRadius: "30px",
                    }}
                  >
                    Founded &nbsp;{" "}
                    <PetsIcon sx={{ transform: "rotate(90deg)" }} />
                  </Button>
                )}
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.itemR,
  auth: state.authR,
});
export default connect(mapStateToProps)(ItemPage);
