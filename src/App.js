import React, { useState } from 'react'
import Move from "./Move.jsx";

export default function App() {
  let  [count,setCount] = useState(0)
  const add = () => {
    setCount(++count)
  }
  return (
    <>
      <button onClick={add}>add</button>
      {count>5?'nothing': <Move></Move>}
    </>
  )
}
