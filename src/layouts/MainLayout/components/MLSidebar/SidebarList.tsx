import React from "react";
import { List, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { DashboardOutlined } from "@mui/icons-material";
import { ThemeProps } from "models/types";
import { makeStyles } from "@mui/styles";
import { PathConstant } from "const";
import { AppButton } from "components/common";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "context";
import SidebarListItem from "./SidebarListItem";

const SidebarList = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const { handleLogout } = useAuthContext();

  return (
    <>
      <Toolbar className={classes.toolbar} />
      <List className={classes.list}>
        {SIDEBAR_ITEMS.map(({ text, IconComponent, path }, index) => (
          <SidebarListItem key={index} path={path}>
            <ListItemIcon className={classes.listItemIcon}>
              <IconComponent />
            </ListItemIcon>
            <ListItemText primary={text} />
          </SidebarListItem>
        ))}
        <AppButton className={classes.buttonLogout} onClick={handleLogout}>
          {getLabel("lLogout")}
        </AppButton>
      </List>
    </>
  );
};

const SIDEBAR_ITEMS = [
  { text: "INO Dashboard", IconComponent: DashboardOutlined, path: PathConstant.DASHBOARD },
];

export default SidebarList;

const useStyles = makeStyles((theme: ThemeProps) => ({
  listItemIcon: {
    color: theme.palette.common.white,
  },
  toolbar: {
    minHeight: "60px",
  },
  list: {
    padding: 0,
  },
  buttonLogout: {
    color: theme.palette.dashboard.text,
    width: "185px",
    height: "40px",
    fontWeight: "800",
    fontSize: "16px",
    lineHeight: "22px",
    margin: theme.spacing(3, 2),
    textTransform: "uppercase",
    "&:hover": {
      color: "white",
    },
  },
}));
