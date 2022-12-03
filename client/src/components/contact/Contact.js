import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import { Stack } from "@mui/system";

const Contact = () => {
  return (
    <Stack alignItems="center">
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PublicIcon />
        </ListItemAvatar>
        <ListItemText primary="Država" secondary="Bosna i Hercegovina" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <LocationCityIcon />
        </ListItemAvatar>
        <ListItemText primary="Grad" secondary="Sarajevo" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <EmailIcon />
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="catalog.app@gmail.com" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PhoneIcon />
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+387 61 111 222" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <HomeIcon />
        </ListItemAvatar>
        <ListItemText primary="Address" secondary="Adija Mulabegovica 11" />
      </ListItem>
    </List>
    </Stack>
  );
};

export default Contact;
