import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data , setData] = useState ([])
    // useEffect (()=>{
    //     fetch('https://api.github.com/users/saurabh2059')
    //     .then(res => res.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 p-5 bg-green-400 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git pic" className='w-[300px]'  />
    </div>
  )
}

export default Github

export const  githubInfoLoader = async()=>{
  const res = await fetch('https://api.github.com/users/saurabh2059')
   return res.json();
}