import React from "react";
import { Box, Grid } from "@mui/material";
import { AppTypography } from "components/common";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { FormatUtils } from "utils";
import clsx from "clsx";
import { getRarityColorByType } from "../DashboardItem";
import { AppConstant } from "const";
import { RoundDetailClass } from "models";

const TableRow = ({ data }: { data: TableDashboardProps }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        xs={1.8}
        borderLeft="1px solid #A9B5B3"
        className={clsx("center-root", classes.root)}
      >
        <AppTypography variant="h6" lineHeight="28px" fontSize={20} color="text.secondary">
          {FormatUtils.truncateHash(data.walletAddress)}
        </AppTypography>
      </Grid>
      <Grid item xs={0.9} className={clsx("center-root", classes.root)}>
        <AppTypography variant="h6" fontSize={20} color="text.secondary">
          {data.totalBox}
        </AppTypography>
      </Grid>
      {data.roundListForUser.map((item, index) => {
        return (
          <Grid item xs={3.1} className={classes.root} key={index}>
            <Box display="flex" className={classes.body}>
              {item.rarityList.map((itemRarity, indexRarity) => (
                <Grid
                  item
                  xs={itemRarity.type === AppConstant.RARITY_TYPE.UNCOMMON ? 5 : 3.5}
                  className={clsx("center-root", classes.content)}
                  key={indexRarity}
                >
                  <AppTypography
                    variant="h6"
                    fontSize={20}
                    color={getRarityColorByType(itemRarity.type)}
                  >
                    {itemRarity.value}
                  </AppTypography>
                </Grid>
              ))}
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default TableRow;

type TableDashboardProps = {
  walletAddress: string;
  totalBox: number;
  roundListForUser: RoundDetailClass[];
};

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    color: theme.palette.text.text,
    height: "56px",
    "&:last-child": {
      borderRight: `1px solid ${theme.palette.text.secondary}`,
    },
  },
  body: {
    height: "100%",
  },
  content: {
    margin: "auto",
  },
}));
