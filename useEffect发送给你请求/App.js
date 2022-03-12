import React, { useEffect, useState } from 'react'
import axios from 'axios'
// useEffect的作用是在渲染完dom之后执行，防止破坏ui出现bug


export default function App() {
  const [list,setList] = useState([])
  useEffect(() => {
    const  reqInfo = async () => {
        const res = await axios.get('http://geek.itheima.net/v1_0/user/channels')
        console.log(res.data.data.channels);
        setList(res.data.data.channels)
    }
    reqInfo()

  },[])
  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li> )}
      </ul>
    </div>
  )
}
