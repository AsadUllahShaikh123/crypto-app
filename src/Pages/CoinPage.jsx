import { Typography } from '@material-ui/core';
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { CoinsList } from '../config/api';
const CoinPage = () => {
  const {id} = useParams();
  const [coins] = useState(CoinsList);
  const [coin] = coins.filter(value => value.id === parseInt(id)) 
  console.log(coin);
  console.log(coin.image); 
  console.log(id);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{width:'30%',borderRight:'3px solid grey',padding:'20px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'20px'}}>
          <img src={coin.image} alt={coin.name}  />
          <Typography variant='h2'>
            {coin.name}
          </Typography>
        </div>
        <Typography style={{textAlign:'justify'}}>
          {coin.description}
        </Typography>
        <Typography variant='h4' >
          Rank: {coin.id}
        </Typography>
        <Typography variant='h4'> 
          Price : {coin.price}
        </Typography>
        <Typography variant='h4'>
          Market : {coin.cap}
        </Typography>
      </div>
      <div>
        Hello From Chart JS
      </div>
    </div>
  )
}

export default CoinPage
