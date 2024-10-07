import React from 'react'
import solux from '@/assets/images/solux-logo.png'
import Image from 'next/image'
import logos from '@/assets/images/brands.png'
const Footer = () => {
  return (
    <footer className='bg-gray-300 flex flex-col gap-[213px] pt-[170px] pr-[50px]'>
      <div className='flex items-start justify-between'>
        <div className='flex basis-1/2 items-start justify-between'>
          <Image src={solux} alt='solux' className='w-[213px] h-[120px] object-contain' width={0} height={0} />
          <p className='text-black-100  text-lg font-semibold basis-1/2'>For Designers, By Designers and for the love of Solana</p>
        </div>
        <div className='flex gap-[50px] basis-1/2 items-start'>
          <div>
            <p className='text-xs opacity-40 text-black-100 font-medium mb-6'>QUICK</p>
            <ul className='flex flex-col gap-2'>
              <li className='text-[19px] text-black-100 opacity-60'>Design showcase</li>
              <li className='text-[19px] text-black-100 opacity-60'>Design patterns</li>
              <li className='text-[19px] text-black-100 opacity-60'>Resources</li>
              <li className='text-[19px] text-black-100 opacity-60'>Case Studies</li>
            </ul>
          </div>
          <div>
            <p className='text-xs text-black-100  opacity-40 font-medium mb-6'>COMMUNITY</p>
            <ul className='flex flex-col gap-2'>
              <li className='text-[19px] text-black-100 opacity-60'>Design showcase</li>
              <li className='text-[19px] text-black-100 opacity-60'>Design patterns</li>
              <li className='text-[19px] text-black-100 opacity-60'>Resources</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image className='w-full h-full object-contain' src={logos} alt='logos' width={0} height={0} />
        </div>
        <div>
          <h4 className='text-black text-3xl font-bold'>Stay connected</h4>
          <p className='font-medium text-black text-base'>Join our news letter and receive weekly digests of top designs, platform updates and offers</p>
          <input className='border placeholder:text-gray-500 placeholder:text-base shadow-custom py-2.5 px-3.5  border-black-100' type='text' placeholder='Your Email' />
        </div>
      </div>
    </footer> 
  )
}

export default Footer