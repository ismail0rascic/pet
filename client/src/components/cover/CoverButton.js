import { useNavigate } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import { Typography } from "@material-ui/core";

const CoverButton = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="center" style={{ marginTop: 30 }}>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/catalog")}
      >
        <Typography variant="h4">
        GET STARTED
        </Typography>
        
      </Button>
    </Stack>
  );
};
export default CoverButton;
