import { Grid } from "@material-ui/core";
import { Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import image from "../../images/welcome.jpg";
import animal1 from "../../images/animal1.jpg";
import animal2 from "../../images/animal2.jpg";
import animal3 from "../../images/animal3.jpg";
import animal4 from "../../images/animal4.jpg";
import "../../styles/style.css";

const Cover = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Stack alignItems="center">
          <img width="100%" height="600vh" src={image} alt="cover img"></img>
        </Stack>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <div className="boxCover"></div>

        <Stack alignItems="center">
          <h1 style={{ color: "#A3653C" }}>
            Meet the animals Waiting for Adoption
          </h1>
        </Stack>

        <Stack
          width="100%"
          justifyContent="center"
          style={{ display: "-webkit-box" }}
        >
          <Stack alignItems="center">
            <Avatar
              alt="animal1"
              src={animal1}
              sx={{ width: 200, height: 200, marginRight: 3 }}
              className="pulse"
            />
            <p>Hello I'm Lucy!</p>
          </Stack>

          <Stack alignItems="center">
            <Avatar
              alt="animal2"
              src={animal2}
              sx={{ width: 200, height: 200, marginRight: 3 }}
              className="pulse"
            />
            <p>My name is Patrick!</p>
          </Stack>
          <Stack alignItems="center">
            <Avatar
              alt="animal3"
              src={animal3}
              sx={{ width: 200, height: 200, marginRight: 3 }}
              className="pulse"
            />
            <p>Hi guys, I am Hulk!</p>
          </Stack>
          <Stack alignItems="center">
            <Avatar
              alt="animal4"
              src={animal4}
              sx={{ width: 200, height: 200, marginRight: 3 }}
              className="pulse"
            />
            <p>Meet Max!</p>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Cover;
