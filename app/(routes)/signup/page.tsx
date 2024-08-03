'use client'
import React from 'react'
import Login from './Login'
import { useState } from 'react'
import Register from './Register'
const page = () => {
  const [register, setRegister] = useState(false)
  return (
    <div
      className='w-full h-screen flex justify-center items-center'>
      {!register ?
        <div className='w-[350px]'>
          <Login />
          <p className='mt-5 text-[12px]'>Don't have Account</p>
          <button onClick={() => setRegister(true)}
            className='text-blue-600 text-[12px] underline'>create account</button>
        </div>
        :
        <div className='w-[350px]'>
          <Register />
          <p className='mt-5 text-[12px]'>Have an Account</p>
          <button onClick={() => setRegister(false)}
            className='text-blue-600 text-[12px] underline'>Login here</button>
        </div>
      }

    </div>
  )
}

export default page