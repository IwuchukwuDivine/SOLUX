"use client"

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.png'
import Avatar from '@/assets/images/Avatar.png'
import { Icons } from './Icons'

const Header = () => {
  return (
    <nav className='w-full flex items-center justify-between px-[4%] py-6'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <Image src={logo} alt='logo' width={50} height={50} />
          <h4 className='text-black text-xl font-semibold'>SoLUX</h4>
        </div>
        <ul className='flex items-center gap-10'>
          <li className='text-gray-600 text-base font-semibold'>Home</li>
          <li className='flex items-center gap-2 text-gray-600 text-base font-semibold'>
            <span>Products</span>
            <Icons.chevron_down />
          </li>
          <li className='flex items-center gap-2 text-gray-600 text-base font-semibold'>
            <span>Resources</span>
            <Icons.chevron_down />
          </li>
          <li className='text-gray-600 text-base font-semibold'>Design Patterns</li>
        </ul>
      </div>
      <div className='flex items-center gap-10'>
        <button className='flex items-center gap-2 bg-primary-100 justify-center rounded-lg py-2.5 px-4 border border-gray-400 shadow-custom'>
          <Icons.zap />
          <span className='text-white font-semibold text-sm'>Upgrade now</span>
        </button>
        <div>
          <Icons.bookmark />
        </div>
        <div>
          <Icons.bitcoin />
        </div>
        <div className='flex items-center gap-2'>
          <Image className='rounded-full' width={40} height={40} src={Avatar} alt='avatar' />
          <span className='text-[10px] font-semibold text-black'>@chisom.Bonk</span>
        </div>
      </div>
    </nav>
  )
}

export default Header
