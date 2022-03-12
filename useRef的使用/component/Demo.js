// import React, { Component } from 'react'
import React, { PureComponent,createRef,forwardRef } from 'react'


// export default class demo extends Component {
//   sayHi(){
//     console.log('hello word!!!!');
//   }
//   render() {
//     return (
//       <div>Dem组件</div>
//     )
//   }
// }


// export default function demo() {
//   const sayHi = () => {
//     console.log('hello hope!!');
//   }
//    return (
//     <div>demo</div>
//   )
// }

export  const Demo = forwardRef( (props,ref) =>  {
  console.log('demo',props,ref);
  // ref['current']['sayHi'] =  () => {
  //   console.log('Hello Hope!!!');
  // }
  return <h2 ref={ref}>Profile</h2>
})
