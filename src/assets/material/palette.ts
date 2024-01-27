const white = "#FFFFFF";
const black = "#1F1F1F";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TPalette = Record<string, any> & { mode: "light" | "dark" };

const palette: TPalette = {
  mode: "light",
  common: {
    main: "#4FA796",
    black,
    white,
  },
  primary: {
    main: "#4FA796",
    dark: "#64BCAB",
    contrastText: white,
    light: "#7ED1C4",
    light1: "#cceee7",
    light2: "#B6EBE0",
    light3: "#95E3D3",
  },
  secondary: {
    main: "#5CD3BB",
    light: "#BCFAF0",
  },
  error: {
    main: "#F5222D",
    light: "#FF9F9F",
    dark: "#F5222D",
    contrastText: white,
  },
  warning: {
    main: "#FADB14",
    light: "#ff9800",
    dark: "#D3B239",
    contrastText: white,
  },
  success: {
    main: "#52C41A",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: white,
  },
  grey: {
    5: "rgba(0, 0, 0, 0.04)",
    10: "rgba(0, 0, 0, 0.16)",
    20: "rgba(0, 0, 0, 0.4)",
    30: "rgba(0, 0, 0, 0.48)",
    40: "rgba(255, 255, 255, 0.12)",
    50: "rgba(255, 255, 255, 0.16)",
    55: "rgba(255, 255, 255, 0.24)",
    60: "rgba(0, 0, 0, 0.6)",
    70: "#1A1F27",
    80: "rgba(255, 255, 255, 0.06)",
    100: "rgba(92, 211, 187, 0.5)",
    200: "rgba(100, 188, 171, 0.5)",
  },
  text: {
    primary: "#7ED1C4",
    secondary: "#A9B5B3",
    disabled: "rgba(255, 255, 255, 0.6)",
    text: "#424242",
  },
  background: {
    default: "linear-gradient(180deg, #97F3E0 0%, rgba(147, 207, 240, 0) 100%)",
    paper: "#152E86",
  },
  modal: {
    paper: "#12094A",
    title: "#201566",
    content: "#232527",
    success: "#FFCC6A",
    background: "#FFEDCB",
  },
  gradient: {
    primary: "linear-gradient(180deg, rgba(151, 243, 224, 0) 0%, #97F3E0 100%);",
    secondary: "linear-gradient(180deg, rgba(147, 207, 240, 0) 0%, #93CFF0 100%)",
    hover: "linear-gradient(3.65deg, #FF930D -17.41%, #FFC803 79.3%)",
    disabled: "linear-gradient(3.65deg, #6B6B6B -17.41%, #B1B1B1 78.55%)",
    modalConfirm: "linear-gradient(0deg, #D8F9F3, #D8F9F3), #FFFFFF",
  },
  epic: {
    primary: "#8668F2",
    secondary: "#D1C4FF",
    gradient: "rgba(134, 104, 242, 0.1)",
    light: "rgba(134, 104, 242, 0.8)",
    enable: "#b66bf2",
    light1: "#DACFFE",
    light2: "rgba(134, 104, 242, 0.25)",
  },
  rare: {
    primary: "#4D86F3",
    secondary: "#A3C2FF",
    gradient: "rgba(104, 151, 241, 0.1)",
    light: "rgba(77, 134, 243, 0.8)",
    enable: "#4d86f3",
    light1: "#BED4FE",
    light2: "rgba(77, 134, 243, 0.25)",
  },
  uncommon: {
    primary: "#94AD00",
    secondary: "#D7EF4B",
    gradient: "rgba(148, 173, 0, 0.1)",
    light: "rgba(148, 173, 0, 0.8)",
    enable: "#94ad00",
    light1: "#E2F094",
    light2: "rgba(148, 173, 0, 0.25)",
  },
  shadow: {
    disabled: "#565861",
    primary: "#2D49A0",
    secondary: "#8E5D24",
    light: "#d4dad8",
  },
  disabled: {
    primary: "#9F9F9F",
    secondary: "#2D2D2D",
    border: "rgba(45, 45, 45, 0.1)",
    text: "#626262",
  },
  box: {
    disabled: "#D3E2E0",
    text: "#F8F8F8",
  },
  schedule: {
    primary: "#A9B5B3",
  },
  dashboard: {
    primary: "#F5F5F5",
    text: "#ED8787",
  },
};

export default palette;
