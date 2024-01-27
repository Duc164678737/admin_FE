import React, { memo, ReactNode } from "react";
import {
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const AppDialog = ({
  classes,
  dialogTitle,
  dialogContent,
  dialogAction,
  dialogTitleProps = {},
  dialogContentProps = {},
  dialogActionsProps,
  ...otherProps
}: AppDialogProps) => {
  const defaultClasses = useStyles();

  const { sx: dialogContentSx, ...otherDialogContentProps } = dialogContentProps;
  const { className: dialogTitleClassName, ...otherDialogTitleProps } = dialogTitleProps;

  return (
    <Dialog classes={{ paper: clsx(defaultClasses.paper, classes?.paper) }} {...otherProps}>
      <DialogTitle
        textAlign="center"
        className={clsx(defaultClasses.dialogTitleRoot, dialogTitleClassName)}
        {...otherDialogTitleProps}
      >
        {dialogTitle}
      </DialogTitle>
      <DialogContent
        sx={{ textAlign: "center", pb: 3, ...dialogContentSx }}
        {...otherDialogContentProps}
      >
        {dialogContent}
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }} {...dialogActionsProps}>
        {dialogAction}
      </DialogActions>
    </Dialog>
  );
};

export type AppDialogProps = DialogProps & {
  dialogTitle?: ReactNode;
  dialogContent?: ReactNode;
  dialogAction?: ReactNode;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogActionsProps?: DialogActionsProps;
};

export default memo(AppDialog);

const useStyles = makeStyles((theme: ThemeProps) => ({
  paper: {
    padding: theme.spacing(3),
    borderRadius: 10,
  },
  dialogTitleRoot: {
    padding: theme.spacing(0, 0, 3, 0),
    fontSize: 24,
  },
  buttonRoot: {
    width: 156,
    padding: 0,
    lineHeight: 2.5,
  },
  lightButton: {
    backgroundColor: theme.palette.info.main,
  },
}));
