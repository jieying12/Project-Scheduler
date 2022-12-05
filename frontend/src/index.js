import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import "bootstrap/dist/css/bootstrap.min.css"

const bgColor = '#2e74b4';

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
      disabledBackground: '#f3dec4',
      hover: '#f3dec4',
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
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        },
        rounded: {
          borderRadius: 12
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: '#2596be',
          padding: '24px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#ff7d4b',
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: '#ff7d4b',
            backgroundColor: '#1c58b5',
            '&:hover': {
              backgroundColor: '#1c58b5'
            },
            '& .MuiListItemIcon-root': {
              color: '#1c58b5'
            }
          },
          '&:hover': {
            backgroundColor: '#1c58b5',
            color: '#1c58b5',
            '& .MuiListItemIcon-root': {
              color: '#1c58b5'
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#1c58b5',
          minWidth: '36px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#1c58b5'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#1c58b5',
          '&::placeholder': {
            color: '#1c58b5',
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#f8eef4',
          borderRadius: 12,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b5a9cc'
          },
          '&:hover $notchedOutline': {
            borderColor: '#b5a9cc'
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          }
        },
        input: {
          fontWeight: 500,
          background: '#f8eef4',
          padding: '15.5px 14px',
          borderRadius: 12,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: 12
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#1c58b5'
          }
        },
        mark: {
          backgroundColor: '#1c58b5',
          width: '4px'
        },
        valueLabel: {
          color: '#1c58b5'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#1c58b5',
          opacity: 1
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: '#1c58b5',
          background: '#1c58b5'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: '#1c58b5',
          background: '#1c58b5'
        }
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: '48px',
      padding: '16px',
      '@media (min-width: 600px)': {
        minHeight: '48px'
      }
    }
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