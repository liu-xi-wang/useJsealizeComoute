import React,{useContext} from 'react'
import './index.scss'
import { Context } from '../../App'
export default function MyCount(props) {
  const {changeGoodsCount} = useContext(Context)
  const  minus = () => {
    changeGoodsCount(props.id,+props.goods_count - 1)
  }
  const  add = () => {
    changeGoodsCount(props.id,+props.goods_count + 1)
  }
  const  inputValue = (e) => {
    changeGoodsCount(props.id , +e.target.value)
  }
 
  return (
    <div className="my-counter" >
      <button type="button"  onClick={minus} className="btn btn-light">
        -
      </button>
      <input type="number" className="form-control inp" value={props.goods_count} onChange = {inputValue} />
      <button type="button" className="btn btn-light"  onClick={add}>
        +
      </button>
    </div>
  )
}

