import React, { memo } from "react";
import {
  Alert,
  AlertProps,
  AlertTitle,
  AlertTitleProps,
  Snackbar,
  SnackbarProps,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const AppSnackbar = ({
  onCloseAlert,
  autoHideDuration = DEFAULT_CLOSE_DIALOG,
  alertTile,
  alertContent,
  alertProps = {},
  alertTitleProps,
  ...otherProps
}: AppSnackbarProps) => {
  const defaultClasses = useStyles();

  const { className: alertClassName, ...otherAlertProps } = alertProps;

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === CLICK_AWAY_REASON) return;
    onCloseAlert();
  };

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
      {...otherProps}
    >
      <Alert className={clsx(defaultClasses.root, alertClassName)} {...otherAlertProps}>
        <AlertTitle {...alertTitleProps}>{alertTile}</AlertTitle>
        {alertContent}
      </Alert>
    </Snackbar>
  );
};

type AppSnackbarProps = SnackbarProps & {
  onCloseAlert: () => void;
  alertTile?: string;
  alertContent?: string;
  alertProps?: AlertProps;
  alertTitleProps?: AlertTitleProps;
};

const DEFAULT_CLOSE_DIALOG = 3000;
const CLICK_AWAY_REASON = "clickaway";

export default memo(AppSnackbar);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    minWidth: 280,
    boxShadow: `0px 2px 6px ${theme.palette.divider}`,
  },
}));
