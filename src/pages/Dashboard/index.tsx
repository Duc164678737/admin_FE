import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { LangConstant } from "const";
import { AppButton, AppInput, AppTypography } from "components/common";
import { DashboardActions, DashboardSelector } from "redux-store";
import DashboardItem from "./DashboardItem";
import TableDashboard from "./TableDashboard";
import Blockchain from "blockchain";

const Dashboard = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation(LangConstant.NS_DASHBOARD);
  const dispatch = useDispatch();

  const { roundList } = useSelector(DashboardSelector.getAllINORounds, shallowEqual);
  const { roundForUser, totalWalletAddress } = useSelector(
    DashboardSelector.getDashboardData,
    shallowEqual,
  );

  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSearch = () => {
    const { transaction } = new Blockchain();
    if (!transaction.checkValidAddress(inputValue)) {
      setHasError(true);
      return;
    }

    dispatch(DashboardActions.getWalletRoundData({ walletAddress: inputValue }));
  };

  useEffect(() => {
    dispatch(DashboardActions.getTotalAddressData());
    dispatch(DashboardActions.getAllINORounds());
  }, []);

  return (
    <Container sx={{ p: "35px 24px !important" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <AppTypography variant="h4" className={classes.title}>
          {getLabel("lDashboard")}
        </AppTypography>
        <Stack direction="row" spacing={1}>
          <AppTypography variant="h4" className={classes.titleAddress}>
            Total Wallet Address:
          </AppTypography>
          <AppTypography variant="h4" className={classes.title}>
            {totalWalletAddress}
          </AppTypography>
        </Stack>
      </Stack>
      <Box className={classes.body}>
        {roundList.map((item, index) => {
          return <DashboardItem key={index} data={item} />;
        })}
      </Box>
      <Stack direction="row" spacing={3} mt={1} mb={3}>
        <AppInput
          required
          fullWidth
          id="Search"
          name="Search"
          type="Search"
          placeholder="Search"
          autoComplete="Search"
          autoFocus
          className={classes.formInput}
          onChange={(e) => {
            setHasError(false);
            setInputValue(e.target.value);
          }}
          value={inputValue}
          helperText={hasError && " Invalid wallet address"}
        />
        <AppButton
          type="submit"
          size="large"
          className={classes.buttonSearch}
          variant="contained"
          sx={{ mt: 4 }}
          onClick={handleSearch}
        >
          {getLabel("lSearch")}
        </AppButton>
      </Stack>
      {roundForUser?.length > 0 && <TableDashboard />}
    </Container>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme: ThemeProps) => ({
  title: {
    marginBottom: theme.spacing(3),
    color: theme.palette.grey[800],
  },
  body: {
    display: "grid",
    rowGap: theme.spacing(3.5),
    columnGap: theme.spacing(4),
    gridTemplateColumns: "1fr 1fr 1fr",
    paddingBottom: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
    },
  },
  titleAddress: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "42px",
    color: "#A9B5B3",
  },
  formInput: {
    width: "335px",
    borderRadius: "8px",

    "& >div": {
      borderRadius: "inherit",
    },
  },
  buttonSearch: {
    width: "150px",
    background: "#5CD3BB",
    color: "#FFFFFF",
    borderRadius: "100px",
    fontWeight: 800,
    fontSize: "16px",
    lineHeight: "22px",
  },
  root: {
    borderBottom: "1px solid #333",
  },
}));
