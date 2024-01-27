import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { DashboardSelector } from "redux-store";
import TableRow from "./TableRow";

const BodyTable = () => {
  const { roundForUser } = useSelector(DashboardSelector.getDashboardData, shallowEqual);

  return (
    <>
      {roundForUser.map((item, index) => (
        <TableRow key={index} data={item} />
      ))}
    </>
  );
};

export default BodyTable;
