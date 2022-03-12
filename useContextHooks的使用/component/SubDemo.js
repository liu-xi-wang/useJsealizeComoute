import React,{useContext} from 'react'
import { Context } from "../index";


// export default function SubDemo() {
//   return (
//     <Context.Consumer>

//       {value => {
//          console.log('value',value)
//          return (
//           <div>
//             <h2>SubDemo组件： {value.info.name}</h2>
//           </div>
//          )
//        }}

//     </Context.Consumer>
//   )
// }
export default function SubDemo() {
  const value = useContext(Context)
    return (
      <div>
        <h2>SubDemo组件： {value.info.name}</h2>
      </div>
    )

}
