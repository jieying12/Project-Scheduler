import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import "bootstrap/dist/css/bootstrap.min.css"

const theme = createTheme({
  palette: {
    background: {
      // default: "#f3dec4"
    },
    primary: {//orange
      main: '#ff7d4b',
      light: '#ff9b6a',
      veryLight: '#f3dec4',
    },
    secondary: {//blue
      main: '#1c58b5',
      light: '#2e74b4',
      // veryLight: '#2e74b4'
    },
    action: {
      disabledBackground: '#2e74b4',
      hover: '#2e74b4',
    }
  },
  text: {
    primary: '#ff7d4b',
    // primary: '#515151',
    secondary: '#A0A3B1',
    disabled: '#FFFFFF'
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          minWidth: '120px',
          minHeight: '40px'
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    subtitle2: {
      color: '#1c58b5'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);