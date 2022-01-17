import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'

const banner = {
  backgroundImage: 'url(./banner2.jpg)',
}

const bannerContent = {
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 25,
  justifyContent: 'space-around',
}

const typography = {
  fontWeight: 'bold',
  marginBottom:15,
  fontFamily: 'Montserrat'
}
const tagline = {
  display:'flex',
  height:'40%',
  flexDirection:'column',
  justifyContent:'center',
  textAlign:'center'
}
const Banner = () => {
  return (
    <div style={banner} >
      <Container style={bannerContent}>
        <div style={tagline}>
          <Typography variant='h2' style={typography} >
            Crypto Hunter
          </Typography>
          <Typography variant='subtitle2' style={{ color: 'darkgrey', textTransform: 'capitalize', fontFamily: 'Montserrat' }}>
            Get All the Info Regarding your favourite Crypto Currency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}

export default Banner
