// export const CoinList = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

// export const SingleCoin = (id) =>
//   `https://api.coingecko.com/api/v3/coins/${id}`;

// export const HistoricalChart = (id, days = 365, currency) =>
//   `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// export const TrendingCoins = (currency) =>
//   `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;



const symbol='$'

export const TrendingCoins =[
  {
    id:1,
    image:'./images/bitcoin.png',
    short:'BTC',
    profit:`+ 1.9%`,
    price:`${symbol}41,525 `
  },
  {
    id:2,
    image:'./images/bnb.png',
    short:'BNB',
    profit:`+ 0.8%`,
    price:`${symbol}462.5`
  },
  {
    id:3,
    image:'./images/ca.png',
    short:'ADA',
    profit:`- 1.5%`,
    price:`${symbol}1.48`
  },
  {
    id:4,
    image:'./images/chainlink.png',
    short :'LINK',
    profit:`- 2.4%`,
    price :`${symbol}22.87`   
  },
  {
    id:5,
    image:'./images/ee.png',
    short:'ETH',
    profit:`+ 0.02%`,
    price:`${symbol}3,143`
  },
  {
    id:6,
    image:'./images/near.png',
    short:'NEAR',
    profit:`+ 0.4%`,
    price:`${symbol}17.29`
  }
]

export const CoinsList =[
  {
    id:1,
    image:'./images/bitcoin.png',
    short:'BTC',
    profit:`+ 1.9%`,
    price:`${symbol}41,525 `
  },
  {
    id:2,
    image:'./images/bnb.png',
    short:'BNB',
    profit:`+ 0.8%`,
    price:`${symbol}462.5`
  },
  {
    id:3,
    image:'./images/ca.png',
    short:'ADA',
    profit:`- 1.5%`,
    price:`${symbol}1.48`
  },
  {
    id:4,
    image:'./images/chainlink.png',
    short :'LINK',
    profit:`- 2.4%`,
    price :`${symbol}22.87`   
  },
  {
    id:5,
    image:'./images/ee.png',
    short:'ETH',
    profit:`+ 0.02%`,
    price:`${symbol}3,143`
  },
  {
    id:6,
    image:'./images/near.png',
    short:'NEAR',
    profit:`+ 0.4%`,
    price:`${symbol}17.29`
  },
  {
    id:7,
    image:'./images/polkadot',
    short:'',
    
  }
]