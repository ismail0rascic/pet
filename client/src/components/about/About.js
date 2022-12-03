import { Typography } from "@material-ui/core";
import { Stack } from "@mui/system";

const About = () => {
  return (
    <>
      <Stack alignItems="center">
        <Typography variant="h4">About Catalog App</Typography>
        <Typography>
          Catalog App is application which allowed user to searching items
          separated in categories. Authenticated user have options to add new
          category,also new item with which have more options like edit and
          delete.
        </Typography>
      </Stack>
    </>
  );
};
export default About;
