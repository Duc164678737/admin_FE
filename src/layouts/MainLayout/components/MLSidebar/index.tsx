import React, { memo } from "react";
import { Box, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import SidebarList from "./SidebarList";
import clsx from "clsx";

const MLSidebar = ({ isOpenSidebarMobile, onToggleSidebarMobile }: MLSidebarProps) => {
  const classes = useStyles();

  return (
    <Box component="nav">
      <Drawer
        classes={{ paper: clsx(classes.sidebarPaper, classes.desktopSidebar) }}
        variant="permanent"
      >
        <SidebarList />
      </Drawer>
      <Drawer
        open={isOpenSidebarMobile}
        onClose={onToggleSidebarMobile}
        classes={{ root: classes.mobileSidebar, paper: classes.sidebarPaper }}
        variant="temporary"
      >
        <SidebarList />
      </Drawer>
    </Box>
  );
};

type MLSidebarProps = {
  isOpenSidebarMobile: boolean;
  onToggleSidebarMobile: () => void;
};

export default memo(MLSidebar);

export const SIDEBAR_WIDTH_IN_PX = 217;

const useStyles = makeStyles((theme: ThemeProps) => ({
  sidebarPaper: {
    width: SIDEBAR_WIDTH_IN_PX,
    background: theme.palette.background.default,
    color: theme.palette.common.white,
    borderRight: 0,
  },
  desktopSidebar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileSidebar: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
