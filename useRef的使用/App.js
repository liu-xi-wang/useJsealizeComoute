import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {Demo} from "./component/Demo.js";
// useEffect的作用是在渲染完dom之后执行，防止破坏ui出现bug


export default function App() {
  const  ref = useRef(null)
  const  refDemo = useRef(null)
  const  clickBtn = () => {
    console.dir(ref.current.value);
    console.log(refDemo);
    // refDemo.current.sayHi()
  }
  const sayHi = () => {
    console.log('Hello Hope!!!');
  }
  return (
    <div>
      <input ref={ref}></input>
      <button onClick={clickBtn}>按钮</button>
      <Demo  sayHi = {sayHi} ref={refDemo}></Demo>
    </div>
  )
}
