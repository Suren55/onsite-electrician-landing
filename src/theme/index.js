// src/theme/index.js
import { createTheme } from "@mui/material/styles";
import { colors, radius, fonts, typography } from "./tokens";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: { default: colors.bg },
    text: { primary: colors.text },
  },
  typography: {
    fontFamily: fonts,
    h1: typography.h1,
    h2: typography.h2,
    button: typography.button,
  },
  shape: { borderRadius: radius },
});

export default theme;
