import React, { useEffect, useState } from 'react'

export default function Move() {
  let [ status,setStatus]=  useState(() => {
    return{x:0,y:0}
  })
  useEffect(() => {
    console.log('添加副作用');
    const move = (e) => {
      setStatus({x:e.pageX,y:e.pageY})
    }
    window.addEventListener('mousemove',move)
    return () => {
      console.log('移除副作用');
      window.removeEventListener('mousemove',move)
    }
  },[])
  return (
    <div>
      <img  
        style={{
        position:'absolute',
        top:status.y + 1,
        left:status.x + 1
      }} src="https://t9.baidu.com/it/u=2286865720,1653665016&fm=218&app=126&f=JPEG?w=121&h=75&s=01839A5D9A60BF5D9CC1FB2E0300F055" alt="" />
    </div>
  )
}
