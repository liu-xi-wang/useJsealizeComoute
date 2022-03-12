import React, { useEffect, useState } from 'react'

export const useScroll = () => {
  let [ scrollStatus,setScrollStatus]=  useState(() => {
    return{scrollX:0,scrollY:0}
  })
  useEffect(() => {
    console.log('添加副作用');
    const move = (e) => {

      setScrollStatus({scrollX:window.pageXOffset,scrollY:window.pageYOffset})
    }
    window.addEventListener('scroll',move)
    return () => {
      console.log('移除副作用');
      window.removeEventListener('scroll',move)
    }
  },[])
  return scrollStatus
}