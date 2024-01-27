import React from "react";
import { Box, Grid } from "@mui/material";
import { AppTypography } from "components/common";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const HeaderTable = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <>
      <Grid
        item
        xs={1.8}
        borderLeft="1px solid #A9B5B3"
        className={clsx("center-root", classes.root)}
      >
        <AppTypography variant="subtitle1">{getLabel("lAddress")}</AppTypography>
      </Grid>
      <Grid item xs={0.9} className={clsx("center-root", classes.root)}>
        <AppTypography variant="subtitle1">{getLabel("lTotal")}</AppTypography>
      </Grid>
      <Grid item xs={3.1} className={classes.root}>
        <AppTypography variant="subtitle1" className={classes.title}>
          {getLabel("lFotOG")}
        </AppTypography>
        <Box display="flex" className={classes.body}>
          <Grid item xs={3.5} className={classes.content}>
            <AppTypography variant="subtitle1" color="epic.primary">
              {getLabel("lEpic")}
            </AppTypography>
          </Grid>
          <Grid item xs={3.5} className={clsx("center-root", classes.contentRare)}>
            <AppTypography variant="subtitle1" color="rare.primary">
              {getLabel("lRare")}
            </AppTypography>
          </Grid>
          <Grid item xs={5} className={classes.content}>
            <AppTypography variant="subtitle1" color="uncommon.primary">
              {getLabel("lUncommon")}
            </AppTypography>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={3.1} className={classes.root}>
        <AppTypography variant="subtitle1" className={classes.title}>
          {getLabel("lFotWL")}
        </AppTypography>
        <Box display="flex" className={classes.body}>
          <Grid item xs={3.5} className={classes.content}>
            <AppTypography variant="subtitle1" color="epic.primary">
              {getLabel("lEpic")}
            </AppTypography>
          </Grid>
          <Grid item xs={3.5} className={clsx("center-root", classes.contentRare)}>
            <AppTypography variant="subtitle1" color="rare.primary">
              {getLabel("lRare")}
            </AppTypography>
          </Grid>
          <Grid item xs={5} className={classes.content}>
            <AppTypography variant="subtitle1" color="uncommon.primary">
              {getLabel("lUncommon")}
            </AppTypography>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={3.1} className={classes.root}>
        <AppTypography variant="subtitle1" className={classes.title}>
          {getLabel("lPublicMinting")}
        </AppTypography>
        <Box display="flex" className={classes.body}>
          <Grid item xs={3.5} className={classes.content}>
            <AppTypography variant="subtitle1" color="epic.primary">
              {getLabel("lEpic")}
            </AppTypography>
          </Grid>
          <Grid item xs={3.5} className={clsx("center-root", classes.contentRare)}>
            <AppTypography variant="subtitle1" color="rare.primary">
              {getLabel("lRare")}
            </AppTypography>
          </Grid>
          <Grid item xs={5} className={classes.content}>
            <AppTypography variant="subtitle1" color="uncommon.primary">
              {getLabel("lUncommon")}
            </AppTypography>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default HeaderTable;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    borderRight: `1px solid ${theme.palette.text.secondary}`,
    color: theme.palette.text.text,
    height: "112px",
  },
  title: {
    height: "50%",
    padding: "16px 0 16px 108px",
    textAlign: "start",
  },
  body: {
    height: "50%",
    borderTop: `1px solid ${theme.palette.text.secondary}`,
  },
  content: {
    margin: "auto",
  },
  contentRare: {
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    borderRight: `1px solid ${theme.palette.text.secondary}`,
  },
}));
