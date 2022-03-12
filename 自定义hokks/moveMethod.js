import React, { useEffect, useState } from 'react'

export function useMove (){
  let [ status,setStatus]=  useState(() => {
    return{x:0,y:0}
  })
  useEffect(() => {
    console.log('添加副作用');
    const move = (e) => {
      setStatus({x:e.pageX,y:e.pageY})
    }
    window.addEventListener('mousemove',move)
    return () => {
      console.log('移除副作用');
      window.removeEventListener('mousemove',move)
    }
  },[])
  return status
}