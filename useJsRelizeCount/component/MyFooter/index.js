import React from 'react'
import './index.scss'
export default function MyFooter({list,changeAllState}) {
  const checkedNumber = list.filter(item => item.goods_state).reduce((prev,item) => prev + item.goods_count,0)
  const  isAllChecked = list.every(item => item.goods_state)
  console.log('checkedNumber',list.filter(item => item.goods_state));
  return (
  <div className="my-footer">
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="footerCheck" checked={isAllChecked}  onChange = {() => changeAllState(isAllChecked)}/>
      <label className="custom-control-label" htmlFor="footerCheck">全选</label>
    </div>
    <div>
      <span>合计:</span>
      <span className="price">¥ 100</span>
    </div>
    <button type="button" className="footer-btn btn btn-primary">结算 ({checkedNumber})</button>
  </div>
  )
}

