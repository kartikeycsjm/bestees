'use client'
import React, { useEffect, useState } from 'react'
import Tshirts from './_assets/Tshirts'
import { Tshirt } from './_assets/types'

const page = () => {
  const [data,setData]=useState([])
  const getData=async()=>{
    const res=await fetch('api/products',{
      cache:'force-cache'
    })
    const data=await res.json();
    console.log(data);
    setData(data.data)
  }
  useEffect(()=>{
    getData()
  })
  return (
    <div className='w-full min-h-screen bg-slate-200
    flex flex-wrap '>
      {data.map((item:Tshirt,index)=>(
        <Tshirts 
        name={item.name}
        sex={item.sex}
        _id={item._id}
        type={item.type}
        size={item.size}
        avaiable={item.avaiable}
        img={item.img}
        price={item.price}
        color={item.color}
        />
      ))}
    </div>
  )
}

export default page