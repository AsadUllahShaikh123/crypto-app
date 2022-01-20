// export const CoinList = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

// export const SingleCoin = (id) =>
//   `https://api.coingecko.com/api/v3/coins/${id}`;

// export const HistoricalChart = (id, days = 365, currency) =>
//   `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// export const TrendingCoins = (currency) =>
//   `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;




export const TrendingCoins =[
  {
    id:1,
    name:'Bitcoin',
    image:'./images/bitcoin.png',
    short:'BTC',
    profit:`+ 1.9%`,
    price:`41,525 `
  },
  {
    id:2,
    name:'Binance Coin',
    image:'./images/bnb.png',
    short:'BNB',
    profit:`+ 0.8%`,
    price:`462.5`
  },
  {
    id:3,
    name:'Cardano',
    image:'./images/ca.png',
    short:'ADA',
    profit:`- 1.5%`,
    price:`1.48`
  },
  {
    id:4,
    name:'Chainink',
    image:'./images/chainlink.png',
    short :'LINK',
    profit:`- 2.4%`,
    price :`22.87`   
  },
  {
    id:5,
    name:'Ethereum',
    image:'./images/ee.png',
    short:'ETH',
    profit:`+ 0.02%`,
    price:`3,143`
  },
  {
    id:6,
    name:'Near',
    image:'./images/near.png',
    short:'NEAR',
    profit:`+ 0.4%`,
    price:`17.29`
  }
]

export const CoinsList =[
  {
    id:1,
    name:'Bitcoin',
    image:'./images/bitcoin.png',
    short:'BTC',
    profit:`+ 1.9%`,
    price:`41,525 `,
    cap:'122,44,55M',
  },
  {
    id:2,
    name:'Binance Coin',
    image:'./images/bnb.png',
    short:'BNB',
    profit:`+ 0.8%`,
    price:`462.5`,
    cap:'334,55,66M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:3,
    name:'Cardano',
    image:'./images/ca.png',
    short:'ADA',
    profit:`- 1.5%`,
    price:`1.48`,
    cap:'44,5556M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:4,
    name:'Chainink',
    image:'./images/chainlink.png',
    short :'LINK',
    profit:`- 2.4%`,
    price :`22.87`,
    cap:'12,2244M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'   
  },
  {
    id:5,
    name:'Ethereum',
    image:'./images/ee.png',
    short:'ETH',
    profit:`+ 0.02%`,
    price:`3,143`,
    cap:'44,455588M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:6,
    name:'Near',
    image:'./images/near.png',
    short:'NEAR',
    profit:`+ 0.4%`,
    price:`17.29`,
    cap:'444,333,11M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:7,
    name:'Polkadot',
    image:'./images/polkadot.png',
    short:'DOT',
    profit:'+ 0.7%',
    price:`24.41`,
    cap:'443,8802M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:8,
    name:'Dogecoin',
    image:'./images/dodge.png',
    short:'DOGE',
    profit:'- 0.457%',
    price:`0.163`,
    cap:'123,445,990M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:9,
    name:'Polygon',
    image:'./images/polygon.jpg',
    short:'MATIC',
    profit:'+ 0.193%',
    price:`2.12`,
    cap:'44,333,555M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:10,
    name:'Solana',
    image:'./images/sola.png',
    short:'SOL',
    profit:'+ 0.78%',
    price:`137.16`,
    cap:'124,44,99M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:11,
    name:'Terra',
    image:'./images/terra.png',
    short:'LUNA',
    profit:'- 0.27%',
    price:`76.96`,
    cap:'112,33M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:12,
    name:'Tether',
    image:'./images/tether.png',
    short:'USDT',
    profit:'+ 0.56%',
    price:`0.996`,
    cap:'44,555,3M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:13,
    name:'Tron',
    image:'./images/tron.png',
    short:'TRX',
    profit:'- 0.7%',
    price:`0.068`,
    cap:'22,333,1M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:14,
    name:'USD Coin',
    image:'./images/usd.png',
    short:'USDC',
    profit:'+ 0.12%',
    price:`1.00`,
    cap:'334,221,11M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
  {
    id:15,
    name:'XRP',
    image:'./images/xrp.png',
    short:'XRP',
    profit:'+ 0.0%',
    price:`0.479`,
    cap:'33,455M',
    description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero, excepturi, quisquam labore recusandae voluptate suscipit explicabo veritatis dicta in provident inventore, tempore nisi dolore! Numquam facere eligendi ipsam fugit?'
  },
]