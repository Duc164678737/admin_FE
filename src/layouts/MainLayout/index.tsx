import React, { memo, useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { IProps } from "models";
import MLSidebar, { SIDEBAR_WIDTH_IN_PX } from "./components/MLSidebar";
import MLHeader, { HEADER_HEIGHT_IN_PX } from "./components/MLHeader";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const MainLayout = ({ className, ...otherProps }: IProps) => {
  const classesDefault = useStyles();

  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <MLHeader onToggleSidebarMobile={() => setIsOpenSidebarMobile((prev: boolean) => !prev)} />
      <MLSidebar
        isOpenSidebarMobile={isOpenSidebarMobile}
        onToggleSidebarMobile={() => setIsOpenSidebarMobile((prev: boolean) => !prev)}
      />
      <Box className={clsx(classesDefault.main, className)} {...otherProps}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default memo(MainLayout);

const useStyles = makeStyles((theme: ThemeProps) => ({
  main: {
    width: `calc(100% - ${SIDEBAR_WIDTH_IN_PX}px)`,
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX}px)`,
    marginTop: HEADER_HEIGHT_IN_PX,
    marginLeft: SIDEBAR_WIDTH_IN_PX,
    backgroundColor: theme.palette.dashboard.primary,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
}));
