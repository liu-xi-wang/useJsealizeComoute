import React, { useEffect, useState } from 'react'
import { useMove } from "./moveMethod.js";
import { useScroll } from "./scrollMethod.js";

export default function Move() {
  const {x,y} = useMove()
  const {scrollX,scrollY} = useScroll()
  console.log(scrollX,scrollY);
  
  return (
    <div>
      <div>scroll位置：{scrollX+'嘻嘻嘻'+scrollY}</div>
      <div>scroll位置：{scrollX+'嘻嘻嘻'+scrollY}</div>
      <div>scroll位置：{scrollX+'嘻嘻嘻'+scrollY}</div>
      <div>scroll位置：{scrollX+'嘻嘻嘻'+scrollY}</div>
      <div>scroll位置：{scrollX+'嘻嘻嘻'+scrollY}</div>
      <div>scroll位置：{scrollX+'嘻嘻嘻'+scrollY}</div>
      <img  
        style={{
        position:'absolute',
        top:y + 1,
        left:x + 1
      }} src="https://t9.baidu.com/it/u=2286865720,1653665016&fm=218&app=126&f=JPEG?w=121&h=75&s=01839A5D9A60BF5D9CC1FB2E0300F055" alt="" />
    </div>
  )
}
