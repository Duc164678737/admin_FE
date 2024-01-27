import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { AppConstant } from "const";
import { AppTypography } from "components/common";

const DashboardItem = ({ data }: DashboardItemProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Stack direction="row" justifyContent="center" height="56px" className={classes.titleStack}>
        <AppTypography textAlign="center" variant="body1" className={classes.title}>
          {getRoundLabel(data.type)}
        </AppTypography>
      </Stack>

      <Stack className={classes.contentStack}>
        {Array.isArray(data.rarityList) &&
          data.rarityList.map((item, index) => (
            <Stack
              spacing={1}
              direction="column"
              alignItems="center"
              justifyContent="center"
              key={index}
            >
              <AppTypography variant="body1" className={classes.content}>
                {getRarityLabel(item.type)}
              </AppTypography>
              <AppTypography
                key={index}
                color={getRarityColorByType(item.type)}
                variant="body1"
                fontSize="24px"
                fontWeight={700}
              >
                {item?.value}
              </AppTypography>
            </Stack>
          ))}
      </Stack>
    </Box>
  );
};

type DashboardItemProps = {
  data: {
    type: number;
    rarityList: {
      type: number;
      value: number;
    }[];
  };
};

export default memo(DashboardItem);

export const getRarityColorByType = (type: AppConstant.RARITY_TYPE) => {
  let color = "";

  switch (type) {
    case AppConstant.RARITY_TYPE.EPIC:
      color = "epic.primary";
      break;
    case AppConstant.RARITY_TYPE.RARE:
      color = "rare.primary";
      break;
    default:
    case AppConstant.RARITY_TYPE.UNCOMMON:
      color = "uncommon.primary";
      break;
  }

  return color;
};

export const getRoundLabel = (type: AppConstant.ROUND_TYPE) => {
  let label = "";

  switch (type) {
    case AppConstant.ROUND_TYPE.OG:
      label = "OG";
      break;
    case AppConstant.ROUND_TYPE.WL:
      label = "WL";
      break;
    default:
    case AppConstant.ROUND_TYPE.Public:
      label = "Public";
      break;
  }

  return label;
};

export const getRarityLabel = (type: AppConstant.RARITY_TYPE) => {
  let label = "";

  switch (type) {
    case AppConstant.RARITY_TYPE.EPIC:
      label = "Epic";
      break;
    case AppConstant.RARITY_TYPE.RARE:
      label = "Rare";
      break;
    default:
    case AppConstant.RARITY_TYPE.UNCOMMON:
      label = "Uncommon";
      break;
  }

  return label;
};

const useStyles = makeStyles((theme: ThemeProps) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15))",
    borderRadius: "16px",
    overflow: "hidden",
  },
  title: {
    height: 56,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "24px",
    color: theme.palette.text.secondary,
  },
  content: {
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    color: "#A9B5B3",
  },

  titleStack: {
    justifyContent: "space-between",
    padding: `0 ${theme.spacing(3)}`,
  },
  titleBox: {
    justifyContent: "center",
    height: 56,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "24px",
    color: theme.palette.text.secondary,
  },
  contentStack: {
    backgroundColor: theme.palette.box.text,
    flexDirection: "row",
    padding: "24px 26px",

    "& div:nth-child(2)": {
      flex: 1,
    },
  },
  titleTotal: {
    color: theme.palette.common.black,
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "24px",
  },
}));
