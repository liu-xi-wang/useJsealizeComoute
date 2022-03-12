// import React, { Component } from 'react'
import React, { PureComponent,createRef,forwardRef,Component } from 'react'
import { Context } from "../index";
import  SubDemo from "./SubDemo.js";


export default class Demo extends Component {
  sayHi(){
    console.log('hello word!!!!');
  }
  render() {
    return (
      <div>
        <h1>father</h1>
        <SubDemo></SubDemo>
      </div>
    )
  }
}


// export default function demo() {
//   const sayHi = () => {
//     console.log('hello hope!!');
//   }
//    return (
//     <div>demo</div>
//   )
// }

// export  const Demo = forwardRef( (props,ref) =>  {
//   console.log('demo',props,ref);
//   // ref['current']['sayHi'] =  () => {
//   //   console.log('Hello Hope!!!');
//   // }
//   return <h2 ref={ref}>Profile</h2>
// })
