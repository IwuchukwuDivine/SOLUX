import React from 'react'
import { Icons } from './Icons'
import heroimg from '@/assets/token/token1.png'
import heroimg1 from '@/assets/token/token2.png'
import heroimg2 from '@/assets/token/token3.png'
import heroimg3 from '@/assets/token/token4.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='bg-gray-300 overflow-hidden rounded-[32px] justify-between px-10 flex items-center  mt-[60px] mb-4'>
      <div className='max-w-[600px]'>
        <h2 className='text-5xl font-semibold text-gray-700'>Solflare -THE SOLANA WALLET</h2>
        <p className='text-gray-700 my-8 font-semibold text-2xl'>Empowering builders, creators and innovators to stay secure and connected in the solana ecosystem</p>
        <button className='flex items-center gap-4 py-3 px-5 bg-black-100 rounded-[21px]'>
          <Icons.download size={24} color='#D6D7DA' />
          <span className='text-gray-100 text-base font-medium'>Download</span>
        </button>
      </div>
      <div className='flex gap-4'>
        <Image className='w-[124px] h-[274px] object-top' width={0} height={0} src={heroimg} objectFit='cover' alt='heroimg' />
        <Image className='w-[124px] self-end h-[274px]' width={0} height={0} src={heroimg3} objectFit='cover' alt='heroimg' />
        <div className='overflow-hidden flex flex-col gap-4'>
          <Image className='w-[124px] h-[274px]' width={0} height={0} src={heroimg1} objectFit='cover' alt='heroimg' />
          <Image className='w-[124px] h-[180px]' width={0} height={0} src={heroimg2} objectFit='cover' alt='heroimg' />
        </div>
      </div>
    </div>
  )
}

export default Hero