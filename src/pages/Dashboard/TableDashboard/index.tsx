import React from "react";
import { Grid } from "@mui/material";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";

const TableDashboard = () => {
  return (
    <Grid container textAlign="center" sx={{ background: "#ffffff", borderRadius: "4px" }}>
      <HeaderTable />
      <BodyTable />
    </Grid>
  );
};

export default TableDashboard;
