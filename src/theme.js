import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#93B7BE'
    },
    secondary: {
      main: '#2D3047'
    },
    info: {
      main: '#A799B7'
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
