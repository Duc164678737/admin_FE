/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, Context, createContext, useContext, useState, useEffect } from "react";
import { ApiConstant, AppConstant, PathConstant } from "const";
import { UserService } from "services";
import { ILogin } from "services/user.service";
import { KeyAbleProps } from "models/types";
import { useDispatch } from "react-redux";
import { AppActions } from "redux-store";
import { useNavigate } from "react-router-dom";

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  isAuthenticated: false,
  handleLogin: (
    _data: ILogin,
    _isSaveLogin: boolean,
    _onSuccess: () => void,
    _onInvalid: () => void,
  ) => {
    return;
  },
  handleLogout: () => {
    return;
  },
};

export const AuthContext: Context<IAuthContextProps> = createContext(INITIAL_STATE);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasLogin = Boolean(
    window.localStorage.getItem(AppConstant.KEY_USER_INFO) ||
      window.sessionStorage.getItem(AppConstant.KEY_USER_INFO),
  );

  const [isAuthenticated, setIsAuthenticated] = useState(hasLogin);

  const handleLogin = async (
    data: ILogin,
    isSaveLogin: boolean,
    onSuccess: () => void,
    onInvalid: () => void,
  ) => {
    const responseLogin: KeyAbleProps = await UserService.login(data);
    // console.log("responseLogin", responseLogin);
    switch (responseLogin.status) {
      case ApiConstant.STT_CREATED:
        setIsAuthenticated(true);
        handleSaveAccessToken(isSaveLogin, data);
        dispatch(AppActions.appSet({ userInfo: data }));
        onSuccess();
        break;
      default:
        onInvalid();
        break;
    }
  };

  const handleLogout = async () => {
    window.localStorage.removeItem(AppConstant.KEY_USER_INFO);
    window.sessionStorage.removeItem(AppConstant.KEY_USER_INFO);
    setIsAuthenticated(false);
    dispatch(AppActions.appReset());
    return;
  };

  useEffect(() => {
    const userInfoLocalStorage = window.localStorage.getItem(AppConstant.KEY_USER_INFO);
    const userInfoStorage =
      userInfoLocalStorage || window.sessionStorage.getItem(AppConstant.KEY_USER_INFO);

    if (!userInfoStorage) return;

    const parseUserInfo = JSON.parse(userInfoStorage);

    handleLogin(
      parseUserInfo,
      Boolean(userInfoLocalStorage),
      () => {
        navigate(PathConstant.ROOT, { replace: true });
      },
      () => {
        if (window.location.pathname === PathConstant.LOGIN) return;
        navigate(PathConstant.LOGIN, { replace: true });
      },
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const handleSaveAccessToken = (
  isSaveLogin: boolean,
  data: { username: string; password: string },
) => {
  if (isSaveLogin) {
    window.localStorage.setItem(AppConstant.KEY_USER_INFO, JSON.stringify(data));
  } else {
    window.sessionStorage.setItem(AppConstant.KEY_USER_INFO, JSON.stringify(data));
  }
};

export type IAuthContextProps = {
  isAuthenticated: boolean;
  handleLogin: (
    data: ILogin,
    isSaveLogin: boolean,
    onSuccess: () => void,
    onInvalid: () => void,
  ) => void;
  handleLogout: () => void;
};
