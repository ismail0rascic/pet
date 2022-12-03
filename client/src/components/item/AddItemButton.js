import { useNavigate } from "react-router-dom";

import { Button, Stack } from "@mui/material";

const AddItemButton = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="end">
      <Button style={{ marginRight: 30 }} onClick={() => navigate("/add")}>
        Add New Item
      </Button>
    </Stack>
  );
};
export default AddItemButton;
