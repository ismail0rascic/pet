import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const MoreButton = (props) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/item" + props.item._id)}>
      View More
    </Button>
  );
};
export default MoreButton;
