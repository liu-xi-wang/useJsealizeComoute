import React, { useEffect, useState } from 'react'
import DouDou from "./DouDou.jsx";
export default function App() {
  let [obj,setcount] = useState(() => {
    console.log('执行这个函数了useState吗？');
    return  {
      name:'hope',
      count:0
    }
  })
  const handleOnclick = () => {
  // console.log('handleOnclick');

    setcount({
      ...obj,
      count:++obj.count
    })
  }

  return (
        <>
        {obj.count>5?'':<DouDou >{obj.count}</DouDou>}
         <div>{obj.name}</div>
         <div>{obj.count}</div>
         <button  onClick={handleOnclick}>加一</button>
        </>
  )
}
