import { useNavigate } from "react-router-dom";
import useStyles from "../../styles/style";

import { Button, Typography } from "@material-ui/core";
import { Stack } from "@mui/system";

const EditButton = ({ id }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Stack style={{ width: "50%" }}>
      <Button className={classes.button} onClick={() => navigate("/edit" + id)}>
        <Typography variant="h5" style={{ color: "green" }}>
          EDIT ITEM
        </Typography>
      </Button>
    </Stack>
  );
};
export default EditButton;
