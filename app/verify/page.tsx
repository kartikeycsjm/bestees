import React, { Context } from 'react'
const verify=async(token:string)=>{
    const res=await fetch('http://localhost:3000/api/verify',{
        headers:{
            auth:token
        },
        cache:'no-store'
    })
    return await res.json()
}
const page = async(context) => {
    const token=context.searchParams.token
    
    const msg=await verify(token);
  return (
    <div>
        this is verification page
        <p>{msg}</p>
    </div>
  )
}

export default page