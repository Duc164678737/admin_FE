import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import palette from "./palette";
import typography from "./typography";
import createCache from "@emotion/cache";

const theme = createTheme({
  breakpoints,
  components,
  palette,
  typography,
});

// Refer link: https://mui.com/material-ui/guides/interoperability/#css-injection-order
const createEmotionCache = () =>
  createCache({
    key: "css",
    prepend: true,
  });

export default theme;
export { breakpoints, createEmotionCache, palette, typography };
