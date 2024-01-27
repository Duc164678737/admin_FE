import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { AuthProvider, GlobalDialogProvider } from "context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme, { createEmotionCache } from "assets/material";
import reportWebVitals from "./reportWebVitals";
import store from "redux-store";
import App from "./App";
import "language";
import "assets/styles";
import { BrowserRouter } from "react-router-dom";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

declare global {
  interface Window {
    isDebug: boolean;
    ethereum: any;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CacheProvider value={clientSideEmotionCache}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalDialogProvider>
            <AuthProvider>
              <CssBaseline />
              <App />
            </AuthProvider>
          </GlobalDialogProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </CacheProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
