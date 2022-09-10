import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const root = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
  },
  fontSizes: {
    small: "16px",
    medium: "20px",
    large: "32px",
  },
  lineHeights: {
    small: "24px",
    medium: "28px",
    large: "40px",
  },
});

const colors = createThemeContract({
  primary: "#008080",
  secondary: null,
  background: null,
  text: {
    normal: null,
    dimmed: null,
  },
});

export const theme = createTheme(colors, {
  primary: "#008080",
  secondary: "#F472B6",
  background: "#008080",
  text: {
    normal: "#cecece",
    dimmed: "#D1D5DB",
  },
});

export const vars = { ...root, colors };
