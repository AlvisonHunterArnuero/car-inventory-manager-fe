import { createTheme } from '@mui/material/styles';

export const automotiveTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D32F2F',
      dark: '#B71C1C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFD700',
    },
    background: {
      default: '#0A0A0A',
      paper: '#161616',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      fontStyle: 'italic',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          '&:hover': {
            scale: 1.04,
            transition: '0.3s ease-in-out',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
});