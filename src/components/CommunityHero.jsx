import React from 'react'
import { Icons } from './Icons'
import brands from '@/assets/images/brands.png'
import Image from 'next/image'


const CommunityHero = () => {
  return (
    <div className='bg-gray-300 overflow-hidden w-full relative   py-[120px]'>
      <div className='w-[70%] flex flex-col items-center gap-10 mx-auto'>
        <h2 className='text-5xl leading-normal font-semibold text-center text-gray-700'>Become a SolUX contributor. Participate in Solana Hackathon or Study great UX case studies from your favorite web3 products</h2>
        <div className={`flex py-[15px] px-5 shadow-custom items-center gap-3 bg-white border border-gray-400 rounded-[32px] w-full`}>
          <Icons.search size={30} />
          <input type='text' placeholder='Search' className='flex-1 outline-none placeholder:text-gray-500 placeholder:text-2xl' />
        </div>
      </div>
      <div className='absolute w-[308px] h-[100px] left-0 -bottom-3'>
        <Image alt='brands' className='w-full h-full object-contain' src={brands} width={0} height={0} />
      </div>
    </div>
  )
}

export default CommunityHero