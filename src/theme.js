import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F2B03E'
    },
    secondary: {
      main: '#51A018'
    },
    info: {
      main: '#376F2F'
    },
    warning: {
      main: '#F2B03E'
    },
    error: {
      main: '#EE5F41'
    },
    success: {
      main: '#51A018'
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
