import { Container, createTheme, LinearProgress, Table, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    type: 'dark'
  },
})


const CoinsTable = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);


  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: 'center' }}>
        <Typography variant='h4' style={{ margin: 18, fontFamily: 'Montserrat' }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField variant='outlined' label='Search For a Crypto Currency...'
          style={{ marginBottom: 20, width: '100%' }}
          onChange={(e) => setSearch(e.target.value)}
        >
        </TextField>
        <TableContainer>
          {
            loading ? (<LinearProgress style={{ backgroundColor: 'gold' }} />) :
              <>
                <Table>
                  <TableHead style={{ backgroundColor: '#EEBC1D' }}>
                    <TableRow>
                      {
                        ['Coin', 'Price', '24h Change', 'Market Cap'].map(head =>
                          <TableCell 
                          style={{color:'black',fontWeight:'700',fontFamily:'Montserrat'}}
                          key={head}
                          align={head === 'Coin' ? "" :'right'}
                          >
                            {head}
                          </TableCell>
                        )
                      }
                    </TableRow>
                  </TableHead>
                </Table>

              </>
          }
        </TableContainer>
      </Container>
    </ThemeProvider>
  )
}

export default CoinsTable
