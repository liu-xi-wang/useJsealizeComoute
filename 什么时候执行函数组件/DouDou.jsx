import React,{useEffect} from 'react'

export default function DouDou({children}) {
  useEffect(() => {
    console.log('执行副作用');
    return () => {
      console.log('清理副作用');
    }
  })
  return (
    <div>DouDou{children}</div>
  )
}
