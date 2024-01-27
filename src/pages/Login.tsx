import React, { useState, useEffect, useMemo } from "react";
import {
  Typography,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
  CssBaseline,
  Stack,
  CardMedia,
} from "@mui/material";
import { AppButton, AppInput, AppLink } from "components/common";
import { ObjectMultiLanguageProps, ThemeProps } from "models/types";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "context";
import { useNavigate } from "react-router-dom";
import { LangConstant, PathConstant } from "const";
import { ImageAssets } from "assets";

const Login = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const { t: getAuthLabel } = useTranslation(LangConstant.NS_AUTH);
  const loginContentObj: ObjectMultiLanguageProps = getLabel("lLoginObj", { returnObjects: true });
  const { handleLogin, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidData, setIsInvalidData] = useState(false);
  const [isRememberPass, setIsRememberPass] = useState(false);

  const handleLoginSuccess = () => navigate(PathConstant.ROOT, { replace: true });
  const handleInvalidData = () => {
    setIsInvalidData(true);
  };

  const handleResetError = () => {
    setIsInvalidData(false);
  };

  const helperErrorText = useMemo(() => {
    if (isInvalidData) return getAuthLabel("msgInvalidData");
  }, [isInvalidData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleLogin({ username, password }, isRememberPass, handleLoginSuccess, handleInvalidData);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PathConstant.DASHBOARD);
    }
  }, []);

  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={false} sm={6} className={classes.wrapper}>
        <Box>
          <AppLink href={PathConstant.ROOT} className={classes.container}>
            <CardMedia component="img" src={ImageAssets.LogoImage} />
          </AppLink>
          <CardMedia component="img" src={ImageAssets.IntroImage} className={classes.Intro} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.root}>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h4" component="h1">
              {loginContentObj.title}
            </Typography>
            <Typography variant="body1" component="h5">
              {loginContentObj.subTitle}
            </Typography>
            <Stack component="form" onSubmit={handleSubmit} className={classes.formRoot}>
              <AppInput
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                  handleResetError();
                }}
                required
                fullWidth
                id="username"
                name="email"
                type="text"
                placeholder="UserName"
                autoComplete="UserName"
                autoFocus
                className={classes.formInput}
              />
              <AppInput
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  handleResetError();
                }}
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                helperText={helperErrorText}
                className={classes.formInput}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isRememberPass}
                    onChange={() => setIsRememberPass(!isRememberPass)}
                    classes={{ checked: classes.checkedIcon, root: classes.checkboxIcon }}
                  />
                }
                label={getLabel("lRememberMe")}
              />
              <AppButton
                type="submit"
                size="large"
                fullWidth
                disabled={!username || !password || isInvalidData}
                variant="contained"
                sx={{ mt: 4 }}
              >
                {getLabel("lLogin")}
              </AppButton>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

const useStyles = makeStyles((theme: ThemeProps) => ({
  wrapper: {
    background: theme.palette.background.default,
  },
  container: {
    width: theme.spacing(44.5),
    height: theme.spacing(6.75),
    display: "block",
    margin: `${theme.spacing(19.25)} auto`,
  },
  Intro: {
    display: "block",
    width: theme.spacing(67.625),
    height: "calc(100% - 365px)",
    margin: "auto",
  },
  root: {
    width: "90%",
    maxWidth: 400,
    textAlign: "center",
    margin: "345px auto 0 auto",

    "& h1": {
      color: theme.palette.common.black,
      fontSize: theme.spacing(4.25),
      lineHeight: theme.spacing(5.25),
    },

    "& h5": {
      marginTop: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
  },
  formRoot: {
    marginTop: theme.spacing(4),
    width: "100%",
    color: theme.palette.common.black,

    "& > $formInput:first-child": {
      marginBottom: theme.spacing(2),
    },
  },
  formInput: {
    marginBottom: theme.spacing(1),
  },
  checkboxIcon: {
    "& [class*='MuiSvgIcon-root']": {
      fontSize: 32,
      color: theme.palette.grey[400],
    },
  },
  checkedIcon: {
    "& [class*='MuiSvgIcon-root']": {
      color: theme.palette.primary.main,
    },
  },
}));
