import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PathConstant } from "const";
import { useAuthContext } from "context";

const AuthenticationRoute = ({ element }: AuthenticationRouteProps): JSX.Element => {
  const { isAuthenticated } = useAuthContext();

  return <>{isAuthenticated ? element : <Navigate to={PathConstant.LOGIN} replace />}</>;
};

type AuthenticationRouteProps = {
  element: ReactNode;
};

export default AuthenticationRoute;
