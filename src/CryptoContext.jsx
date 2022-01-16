import React, { createContext, useContext, useState, useEffect} from 'react'

const Crypto = createContext();

const CryptoContext = ({children}) => {
  
  const [currency, setCurrency] = useState("INR");
  const [symbol , setSymbol] = useState("₹")

  useEffect(() => {
      if(currency ==='INR') setSymbol("₹")
      if(currency ==='USD') setSymbol("$")
  }, [currency]);

  return (
    <Crypto.Provider value={{currency, symbol , setCurrency}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

// To export our state to whole our app, we use useContext with passing the Context which we have created, it will restrict us to the use of import useContext when ever we need the state  
export const CryptoState=()=>{
  return useContext(Crypto)
}