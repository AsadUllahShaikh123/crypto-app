import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'


// the element with flex 1 property will gain the all remaining spaces leaving \
// the other elements will have the same the width as their content.
let typography = {
  flex: 1,
  color: 'gold',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  cursor: 'pointer'
}



const Header = () => {


  // useNavigate is the replacement of useHistory in react-router-dom v6
  let navigate = useNavigate();
  // to implement darktheme to the Header we use createTheme() which is in mui v4
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    },
  })

  let { currency, setCurrency } = CryptoState();
  return (
    <>
      {/* we have wrapped the header to apply the dark theme */}
      <ThemeProvider theme={darkTheme}>
        {/* to use position:static,simply means to put the element in its normal position  */}
        <AppBar color='transparent' position='static'>
          {/* For Responsive Design we have used Container here */}
          <Container>
            <Toolbar>
              <Typography onClick={() => navigate('/')} variant='h6' style={typography}>
                Crypto Hunter
              </Typography>
              <Select variant='outlined'
                style={{ width: 100, height: 40, marginRight: 15 }}
                value={currency}
                onChange={(e)=> setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  )
}

export default Header
