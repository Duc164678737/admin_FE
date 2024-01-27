import React, { memo } from "react";
import { ListItem, ListItemButton, ListItemProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { useNavigate } from "react-router-dom";

const SidebarListItem = ({ path, children }: SidebarListItemProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <ListItem
      disablePadding
      className={
        window.location.pathname.includes(path)
          ? classes.activeBackground
          : classes.defaultBackground
      }
      onClick={() => navigate(path)}
    >
      <ListItemButton>{children}</ListItemButton>
    </ListItem>
  );
};

type SidebarListItemProps = ListItemProps & {
  path: string;
};

export default memo(SidebarListItem);

const useStyles = makeStyles((theme: ThemeProps) => ({
  defaultBackground: {
    backgroundColor: "inherit",
  },
  activeBackground: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
