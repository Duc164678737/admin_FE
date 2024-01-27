import { ReactNode } from "react";
import { Theme } from "@mui/system";
import { TypographyProps, SxProps, SvgIconProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

export interface IProps {
  children?: ReactNode;
  className?: string;
  classes?: object;
}

export interface IIconProps extends SvgIconProps {
  sx?: object;
  className?: string;
}

export interface ThemeProps extends Theme {
  typography: {
    h1: TypographyItemProps;
    h2: TypographyItemProps;
    h3: TypographyItemProps;
    h4: TypographyItemProps;
    h5: TypographyItemProps;
    h6: TypographyItemProps;
    body1: TypographyItemProps;
    body2: TypographyItemProps;
    subtitle1: TypographyItemProps;
    subtitle2: TypographyItemProps;
    caption: TypographyItemProps;
    overline: TypographyItemProps;
    fontSize: number;
    htmlFontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
  };
  zIndex: {
    appBar: 1100;
  };
}

interface TypographyItemProps {
  fontSize: StringOrNumber;
  fontWeight: StringOrNumber;
  lineHeight: string;
}

export interface AppTypographyProps extends TypographyProps {
  variant?: Variant;
  children?: ReactNode;
  responsiveVariant?: {
    xs?: Variant;
    sm?: Variant;
    md?: Variant;
    lg?: Variant;
    xl?: Variant;
  };
  sx?: SxProps;
  component?: ReactNode;
  className?: string;
}

export interface EventInputFileProps {
  target: HTMLInputElement & EventTarget;
}

export interface ObjectMultiLanguageProps {
  [x: string]: string;
}

export interface KeyAbleProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type StringOrNumber = string | number;
export type NumberOrNull = number | null;
export type JsonClass<T> = KeyAbleProps | T;
