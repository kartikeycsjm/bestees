import React from 'react'
import Image from 'next/image'
import { Tshirt } from './types'
const Tshirts = ({_id,price,type,sex,name,
    color,size,avaiable,img}:Tshirt) => {
    return (
        <div className='w-[45%] m-[2.5%] h-[350px]
        border border-blue-400'>
            <Image
                className='w-[100%] h-[72%]'
                alt='polo'
                width={500}
                height={500}
                src={`/products/${img}.webp`}>
            </Image>
            <div className='w-full h-[28%]
            flex'>
                <div className='w-[80%] h-full'>
                    <h3 className=' capitalize mx-1 my-1 text-[14px]'>
                        {name}
                    </h3>
                    <div className='ml-1 flex'>
                        <p className='text-[12px]'>
                            {sex},{type}sleeves,{color}{avaiable}</p>
                    </div>
                    <div>
                        <p className='font-bold m-1 text-[12px]'>&#8377;
                        {price}</p>
                        <p className='m-1 text-[11px]'>Available:{avaiable}pcs</p>
                    </div>
                </div>
                <button className='w-[40px] h-[40px] text-[30px] rounded
                bg-green-600 mx-1 my-5 
                flex justify-center items-center'>+</button>
            </div>
        </div>

    )
}
export default Tshirts