import React, { memo } from "react";
import { Button, ButtonClasses, ButtonProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const AppButton = ({ classes, children, ...otherProps }: AppButtonProps) => {
  const defaultClasses = useStyles();

  return (
    <Button
      classes={{
        ...classes,
        root: clsx(defaultClasses.root, classes?.root),
        disabled: clsx(defaultClasses.disabled, classes?.disabled),
      }}
      variant="contained"
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export type AppButtonProps = ButtonProps & {
  classes?: ButtonClasses;
};

export default memo(AppButton);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    minWidth: 135,
    fontSize: 20,
    textTransform: "none",
    backgroundColor: theme.palette.secondary.light,
    borderRadius: theme.spacing(2),
    boxShadow: "none",
    color: theme.palette.text.primary,
    fontWeight: "600",
    lineHeight: theme.spacing(3.5),
  },

  disabled: {
    "&&": {
      color: "white",
      backgroundColor: theme.palette.grey[500],
    },
  },
}));
