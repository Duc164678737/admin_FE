import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PathConstant } from "const";
import { DashboardPage, LoginPage } from "pages";
import { AuthenticationRoute } from "components/common";
import MainLayout from "layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path={PathConstant.LOGIN} element={<LoginPage />} />
      <Route element={<AuthenticationRoute element={<MainLayout />} />}>
        <Route
          path={PathConstant.ROOT}
          element={<Navigate to={PathConstant.DASHBOARD} replace />}
        />
        <Route path={PathConstant.DASHBOARD} element={<DashboardPage />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default App;
