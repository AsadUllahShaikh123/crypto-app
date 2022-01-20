import React,{useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'

const carousel = {
  height:'50%',
  display:'flex',
  alignItems:'center',
  marginBottom:'20px'
}
const carouselItems ={
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  cursor:'pointer',
  textTransform:'uppercase',
  color:'white'
}

const Carousel = () => {

  const {currency,symbol} = CryptoState();
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins= ()=>{
      setTrending(TrendingCoins)
  }
  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency])

  const items = trending.map(value => 
      <Link to={`/coins/${value.id}`} style={carouselItems}>
        <img src={value.image} alt="coins" 
          style={{marginBottom:10,height:'120px'}}
        />
        <span style={{fontSize:'22px'}}>{value.short} 
        &nbsp;
        <span style={{color: value.profit.includes('-') ? 'red' : 'green'}}>{value.profit}</span>
        </span>
        <span style={{fontSize:'22px',fontWeight:'bold'}}>{symbol}{value.price}</span>
      </Link>
    )

  const responsive={
    0:{
      items:2
    },
    512:{
      items:4
    }
  }
  return (
    <div style={carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}      
      >

      </AliceCarousel>
    </div>
  )
}

export default Carousel
