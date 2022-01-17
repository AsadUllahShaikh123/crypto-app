import axios from 'axios'
import React,{useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'

const carousel = {
  height:'50%',
  display:'flex',
  alignItems:'center'
}

const Carousel = () => {

  const {currency} = CryptoState();
  const [trending, setTrending] = useState('');
  const fetchTrendingCoins= ()=>{
      setTrending('')
  }
  console.log(trending);
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency])

  const items = {
     
  }

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
