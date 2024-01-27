import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { AppBar, Container, IconButton } from "@mui/material";
import { SIDEBAR_WIDTH_IN_PX } from "../MLSidebar";
import { Menu } from "@mui/icons-material";
import MenuHeader from "./MenuHeader";
import clsx from "clsx";

const MLHeader = ({ onToggleSidebarMobile }: MLHeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container className={clsx("flex-end-root", classes.container)}>
        <IconButton onClick={onToggleSidebarMobile} sx={{ display: { sm: "none" } }}>
          <Menu />
        </IconButton>
        <MenuHeader />
      </Container>
    </AppBar>
  );
};

type MLHeaderProps = {
  onToggleSidebarMobile: () => void;
};

export default memo(MLHeader);
export const HEADER_HEIGHT_IN_PX = 60;

const useStyles = makeStyles((theme: ThemeProps) => ({
  appBar: {
    width: `calc(100% - ${SIDEBAR_WIDTH_IN_PX}px)`,
    marginLeft: `${SIDEBAR_WIDTH_IN_PX}px`,
    boxShadow: "none",
    backgroundColor: theme.palette.common.white,
    color: "inherit",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  container: {
    minHeight: HEADER_HEIGHT_IN_PX,

    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
}));
