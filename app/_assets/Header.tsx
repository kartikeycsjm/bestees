'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Header = () => {
  const router=useRouter();
  return (
    <div className='bg-slate-300 sticky top-0 w-full h-[60px]
    flex items-center justify-between'>
      <h1 className='text-[30px] ml-5'>Bestees</h1>
      <button
      onClick={()=>router.push('/signup')}
       className='mr-5'>Sign Up</button>
    </div>
  )
}

export default Header