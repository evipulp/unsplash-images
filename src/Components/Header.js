import React from "react";
import "./Styles/Header.css";

//Material-ui
import { makeStyles } from "@material-ui/core/styles";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <CameraAltIcon className="camera" />
        </IconButton>
      </div>
      <div className="header_right">
        <h4>Home</h4>
        <h4>Collections</h4>
        <h4>Explore</h4>

        <IconButton>
          <MoreHorizIcon />
        </IconButton>
        <Button
          borderRadius={16}
          variant="outlined"
          size="small"
          className={classes.margin}
        >
          Submit a photo
        </Button>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <div className="header_info">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
