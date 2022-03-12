import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Demo from "./component/Demo.js";
// useEffect的作用是在渲染完dom之后执行，防止破坏ui出现bug
import { Context } from "./index";


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
  const [info , setInfo] =useState({name:'hope'})
  return (
    <Context.Provider className="privide"  value={{info:info}}>
      <Demo></Demo>
    </Context.Provider>
  )
}
