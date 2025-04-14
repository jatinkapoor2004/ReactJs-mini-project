import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData] =React.useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/jatinkapoor2004')
    //     .then((response) => response.json())
    //     .then((data) =>{
    //         console.log(data);          
    //         setData(data)
    //     })
    // },[])

    //this hook is used to get the preloaded data and we are storing it in data variable
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers : {data.following}
        <img src={data.avatar_url} width={300} alt="Image from github" />
    </div>
  )
}

export default Github

//this function will get the data even before the page laod
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/jatinkapoor2004')
    return response.json()
}