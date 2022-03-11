import React from 'react'
import './index.scss'
export default function GoodsItem(props) {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={props.goods_img} checked={props.goods_state} onChange = {() => {props.changeState(props.id)}}/>
          <label className="custom-control-label" htmlFor={props.goods_img}>
            <img
              src={props.goods_img}
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{props.goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {props.goods_price}</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  )
}

