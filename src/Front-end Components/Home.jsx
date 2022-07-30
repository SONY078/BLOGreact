import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {
    // useEffect(()=>
    // {
    //     axios.get('https://blog-u-n.herokuapp.com/api/details').then(data =>{
    //         console.log(data);
    //         // setState(data.headers.content-length);
    // }).catch(err =>
    //         console.log(err))
    // },[])
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        fetch(`https://blog-u-n.herokuapp.com/api/details`).then(res => res.json()).then(data => setData(data))

    },[])
  return (
    <div>
        <h1>Home Component</h1>
        {
          
            data.map((i)=>(
            <img src={i.Image} alt=""/>))
        }
    </div>
  )
}

export default Home