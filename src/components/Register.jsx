"use client"
import React from 'react'
import brands from '@/assets/images/brands.png'
import Image from 'next/image'

const Register = () => {
  return (
    <div className='bg-black pt-6 my-10 w-[70%] mx-auto rounded-3xl px-[60px] flex flex-col justify-between min-h-[387px]'>
      <div className='bg-white max-w-fit rounded-[21px] flex items-center gap-3 py-1.5 px-4'>
        <button className='border border-primary-100 rounded-[21px] py-1 px-2.5 text-base text-gray-700 font-medium'>Register</button>
        <p className='text-primary-100 text-base font-medium'>October Solana Hackathon, 2025</p>
      </div>
      <Image src={brands} alt='brands'  width={700} height={0} />
    </div>
  )
}

export default Register