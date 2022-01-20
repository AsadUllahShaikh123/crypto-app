import { Container, createTheme, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { CoinsList } from '../config/api.js'
import {useNavigate} from 'react-router-dom'
import  { CryptoState } from '../CryptoContext.jsx'
import { Pagination } from '@material-ui/lab'

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
  const [coins,setCoins] = useState([]);
  const [page,setPage] = useState(1);
  const navigate = useNavigate();
  const {symbol} = CryptoState();

  setTimeout(() => {
    setLoading(false);
    setCoins(CoinsList)
  }, 1000);

  const handleSearch = () => {
    return coins.filter(value => value.name.toLowerCase().includes(search) || value.short.toLowerCase().includes(search))
  }
  const pagination = {
    "& .MuiPaginationItem-root":{
      color:'gold'
    }
  }


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
                        style={{ color: 'black', fontWeight: '700', fontFamily: 'Montserrat' }}
                        key={head}
                        align={head === 'Coin' ? "" : 'right'}
                      >
                        {head}
                      </TableCell>
                    )
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  handleSearch().slice((page-1)*7, (page-1) * 7 + 7).map(row => 
                      <TableRow onClick={()=> navigate(`/coins/${row.id}`)}
                      key={row.name}
                      className='bg-gray-800 hover:bg-gray-900 hover:cursor-pointer'
                      >
                          <TableCell component='th' scope='row' style={{display:'flex',gap:15}} >
                            <img src={row.image} alt="coins" style={{height:'50px',marginBottom:10}} />
                            <div style={{display:'flex',flexDirection:'column'}}>
                              <span style={{textTransform:'uppercase',fontSize:'22px'}}>
                                  {row.short}
                              </span>
                              <span style={{color:'darkgrey'}}>
                                  {row.name}
                              </span>
                            </div>
                    
                          </TableCell>
                          <TableCell align='right' style={{fontWeight:'500'}}>
                            {symbol}{row.price}
                          </TableCell>
                          <TableCell align='right' style={{color: row.profit.includes('-')? 'red':'green',fontWeight:'500'}}>
                            {row.profit}
                          </TableCell>
                          <TableCell align='right' >
                              {symbol}{row.cap} 
                          </TableCell>
                      </TableRow>
                    )
                }
              </TableBody>
            </Table>

          </>
      }
    </TableContainer>
    <Pagination
    className={{ul:pagination}}
    style={{padding:20,width:'100%',display:'flex',justifyContent:'center'}}
     onChange={(_,value)=> {
       setPage(value);
       window.scroll(0,450)
     }}
     count={Math.ceil((handleSearch().length/7))}
    >

    </Pagination>
  </Container>
</ThemeProvider>
)
}

export default CoinsTable
