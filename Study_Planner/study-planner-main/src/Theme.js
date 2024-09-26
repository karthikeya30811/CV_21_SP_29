import { createTheme } from "@mui/material/styles";

// Light Theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#ffffff", // White
      main: "#ffffff",  // White
      dark: "#ffffff",  // White
      contrastText: "#000000", // Black for contrast
    },
    secondary: {
      light: "#f5f5f5", // Light gray
      main: "#e0e0e0",  // Gray
      dark: "#bdbdbd",  // Dark gray
      contrastText: "#000000", // Black for contrast
    },
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#ffffff", // White
      main: "#ffffff",  // White
      dark: "#ffffff",  // White
      contrastText: "#000000", // Black for contrast
    },
    secondary: {
      light: "#f5f5f5", // Light gray
      main: "#e0e0e0",  // Gray
      dark: "#bdbdbd",  // Dark gray
      contrastText: "#000000", // Black for contrast
    },
    background: {
      paper: "#121212",  // Dark background for paper
      default: "#121212", // Dark default background
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#e0e0e0", // Light gray text for secondary
      disabled: "rgba(255, 255, 255, 0.5)", // Disabled text
      icon: "#ffffff", // White for icons
      divider: "#e0e0e0", // Light gray divider
    },
    action: {
      active: "#ffffff", // White for active elements
    },
    overrides: {
      MUIDataTable: {
        responsiveStacked: {
          maxHeight: "none",
          overflowX: "auto",
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
