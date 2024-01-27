import React, { memo, MouseEvent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowDropDown } from "@mui/icons-material";
import { ThemeProps } from "models/types";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "context";
import { shallowEqual, useSelector } from "react-redux";
import { AppSelector } from "redux-store";

const MenuHeader = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const { handleLogout: handleLogoutContext } = useAuthContext();

  const userInfo = useSelector(AppSelector.getUserInfo, shallowEqual);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickMenu = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    handleLogoutContext();
  };

  return (
    <>
      <Button
        disableRipple
        endIcon={<ArrowDropDown sx={{ color: "#424242" }} />}
        className={classes.button}
        onClick={handleClickMenu}
      >
        {userInfo.username}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        classes={{ paper: classes.menuPaper, list: classes.menuList }}
      >
        <MenuItem disableRipple className={classes.menuItem} onClick={handleLogout}>
          {getLabel("lLogout")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default memo(MenuHeader);

const useStyles = makeStyles((theme: ThemeProps) => ({
  button: {
    padding: theme.spacing(0.25, 0, 0.25, 2),
    textTransform: "none",
    color: "#424242",
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 0,

    "&:hover": {
      backgroundColor: "inherit",
    },
  },

  menuPaper: {
    marginTop: theme.spacing(2.25),
    boxShadow: "none",
  },

  menuList: {
    padding: 0,
  },

  menuItem: {
    padding: theme.spacing(0.75, 3),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
