import React, { memo } from "react";
import { Trans as I18Trans } from "react-i18next";
import { Box, Link } from "@mui/material";
import AppTypography from "./AppTypography";
import theme from "assets/material";

const AppTrans = ({ href, linkProps, textProps, ...otherProps }: AppTransProps) => {
  return (
    <Box
      component={I18Trans}
      components={{
        bold: <strong />,
        errorColor: <Box component="span" color={theme.palette.error.main} />,
        successColor: <Box component="span" color={theme.palette.success.main} />,
        a: <Link href={href} target="_blank" underline="none" color="inherit" {...linkProps} />,
        typography: <AppTypography component="span" {...textProps} />,
        br: <br />,
      }}
      {...otherProps}
    />
  );
};

type AppTransProps = {
  href?: string;
  textProps?: object;
  linkProps?: object;
  i18nKey?: string;

  [x: string]: unknown;
};

export default memo(AppTrans);
