import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    subtitle1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "130%",
      color: "#1d1d1d",
    },
  },
});
