// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#7a9e3e', // Green
    },
    secondary: {
      main: '#141414', // Dark Gray/Black
    },
    text: {
      primary: '#1A1A1A', // primary text
      secondary: '#4d4d4d', // secondary text
    },
    background: {
      default: '#f5f7f6', // Pure white background
    },
  },
  typography: {
    // Default body font
    fontFamily: "'Code Next', sans-serif",

    // Headings
    h1: {
      fontFamily: "'Averta', sans-serif !important",
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Muller Next', sans-serif !important",
      fontWeight: 600,
      fontSize: "2.4rem",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Ranade' !important",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h4: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 500,
      fontSize: "1.3rem",
    },
    h6: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 500,
      fontSize: "1.1rem",
    },
    

    // Paragraphs, body text, etc.
    body1: {
      fontFamily: "'Code Next', sans-serif !important",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "'Code Next', sans-serif !important",
      fontWeight: 400,
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },

    button: {
      fontFamily: "'Code Next', sans-serif !important",
      textTransform: "capitalize",
      fontWeight: 500,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
        html *::selection {
  background: #0f5719 !important;
  color: white !important;
}

html *::-webkit-selection {
  background: #0f5719 !important;
  color: white !important;
}

          font-family: 'Poppins', sans-serif;
          color: #1A1A1A;
          background-color: #f5f7f6;
        }
      `,
    },
  },
});

export default theme;
