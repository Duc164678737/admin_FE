import React, { memo } from "react";
import { ThemeProps } from "models/types";
import { TextField, TextFieldProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const AppInput = ({ InputProps = {}, FormHelperTextProps = {}, ...otherProps }: TextFieldProps) => {
  const classes = useStyles();

  const { classes: inputClasses, ...otherInputProps } = InputProps;
  const { className: helperTextClassName, ...otherFormHelperTextProps } = FormHelperTextProps;

  return (
    <TextField
      InputProps={{
        classes: {
          ...inputClasses,
          root: clsx(classes.root, inputClasses?.root),
          input: clsx(classes.input, inputClasses?.input),
          focused: clsx(classes.focused, inputClasses?.focused),
          error: clsx(classes.error, inputClasses?.error),
          disabled: clsx(classes.disabled, inputClasses?.disabled),
        },
        ...otherInputProps,
      }}
      FormHelperTextProps={{
        className: clsx(classes.helperText, helperTextClassName),
        ...otherFormHelperTextProps,
      }}
      {...otherProps}
    />
  );
};

export default memo(AppInput);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    maxWidth: 468,
    width: "100%",
    backgroundColor: theme.palette.common.white,

    "&$disabled [class*='notchedOutline']": {
      borderColor: theme.palette.grey[300],
      color: theme.palette.grey[600],
    },

    "&$disabled:hover [class*='notchedOutline']": {
      borderColor: theme.palette.grey[300],
    },

    "&:hover [class*='notchedOutline']": {
      borderColor: theme.palette.grey[500],
    },
  },
  error: {
    "&:hover [class*='notchedOutline']": {
      borderColor: theme.palette.error.main,
    },
  },
  input: {
    padding: theme.spacing(1, 2),
    color: theme.palette.common.black,
  },
  focused: {
    "&$focused": {
      "& [class*='notchedOutline']": {
        borderWidth: 1,
      },

      "&:hover [class*='notchedOutline']": {
        borderColor: theme.palette.primary.main,
      },

      "&:hover$error [class*='notchedOutline']": {
        borderColor: theme.palette.error.main,
      },
    },
  },
  helperText: {
    margin: theme.spacing(0.25, 0, 0, 0),
    color: theme.palette.error.main,
    ...theme.typography.body2,
  },
  disabled: {
    backgroundColor: theme.palette.grey[200],
  },
}));
