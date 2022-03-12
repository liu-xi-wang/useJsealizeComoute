import React, { useState } from 'react'

export default function App() {
  const [obj,setMoney] = useState(() => {
    console.log('useState');
    if((new Date()).valueOf()%2 === 0){
      return {money:10000}
    }else{
      return {money:20000}
    }
  })
  const fixMoney = () => {
    setMoney({money:(new Date()).valueOf()})
  }
  
  return (
    <div onClick={fixMoney}>App{obj.money}</div>
  )
}
