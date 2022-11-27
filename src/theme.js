import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A78DD5'
    },
    secondary: {
      main: '#AABA9E'
    },
    info: {
      main: '#B5B8A3'
    },
    warning: {
      main: '#C6B89E'
    },
    error: {
      main: '#CC2936'
    },
    success: {
      main: '#4caf50'
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
