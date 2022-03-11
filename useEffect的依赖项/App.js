import React, { useEffect, useState } from 'react'

export default function App() {
  let [obj,setcount] = useState(() => {
    console.log('initData');
    return {
      name:'hope',
      count:0
    }
  })
   let [makeMoney,setMoney] = useState(() => {
    console.log('initData');
    return {
      money:0
    }
  })
  console.log('执行这个函数了吗？');
  const handleOnclick = () => {
    setcount({
      ...obj,
      count:++obj.count
    })
  }
  const handleMoney = () => {
    setMoney({
      ...makeMoney,
      money:makeMoney.money+100
    })
  }
  // 除了渲染 ui 其他的都算是 Effect
  // useEffect( () => {
  //   console.log('makeMoney.money + useEffect执行了吗？');
  //   document.title = `我挣了${makeMoney.money}钱`
  // },[makeMoney.money]) 
  // useEffect( () => {
  //   console.log('obj.count+ useEffect执行了吗？');
  //   document.title = `我加了多少${obj.count}次`
  // },[obj.count]) 

  useEffect( () => {
    console.log('适合发送请求或者 注册全局事件执行一次');
  },[])
  
  return (
        <>
         <div>{obj.name}</div>
         <div>{obj.count}</div>
         <div>{makeMoney.money}</div>

         <button  onClick={handleOnclick}>加一</button>
         <button  onClick={handleMoney}>挣钱</button>
        </>
  )
}
