import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5989A7'
    },
    secondary: {
      main: '#1D3557'
    },
    info: {
      main: '#F1FAEE'
    },
    warning: {
      main: '#E0CA3C'
    },
    error: {
      main: '#EE5F41'
    },
    success: {
      main: '#048A81'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat,sans-serif',
          fontSize: '12px',
          fontWeight: '600'
        }
      }

    }
  }

})

export default theme
