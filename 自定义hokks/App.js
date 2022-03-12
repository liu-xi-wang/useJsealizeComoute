import React, { useState } from 'react'
import Move from "./Move.jsx";

export default function App() {
  let  [count,setCount] = useState(0)
  const add = () => {
    setCount(++count)
  }
  return (
    <>
     <div className='container'  style={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center', //（水平居中对齐）
        height:'100vh',
      }}>
      <button onClick={add}>add</button>
      {count>5?'nothing': <Move></Move>}
     </div>
    </>
  )
}
