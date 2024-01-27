import { AutocompleteProps } from "@mui/material";
import AppHead, { AppHeadProps } from "./AppHead";
import AppLink from "./AppLink";
import AuthenticationRoute from "./AuthenticationRoute";
import AppTypography from "./AppTypography";
import AppTrans from "./AppTrans";
import AppInput from "./AppInput";
import AppButton from "./AppButton";
import AppDialog, { AppDialogProps } from "./AppDialog";

export {
  AppHead,
  AppLink,
  AuthenticationRoute,
  AppTypography,
  AppTrans,
  AppInput,
  AppButton,
  AppDialog,
};

type AppAutocompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
> = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;

export type { AppHeadProps, AppDialogProps, AppAutocompleteProps };
