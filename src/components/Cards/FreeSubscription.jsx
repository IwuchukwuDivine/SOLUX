"use client"

import React from 'react'
import { Icons } from '../Icons'
import Seperator from '../seperator'

const FreeSubscription = () => {
  return (
    <div className='bg-white cursor-pointer rounded-[30px] py-[42px] px-[31px]'>
      <div className='flex w-full gap-[40px]'>
        <div className='flex flex-col justify-between'>
          <span className='bg-primary-500 rounded-[32px] text-black-100 text-xs py-1.5 px-3.5'>Free Plan</span>
          <h4 className='text-6xl font-semibold'>$ 0 <span className='text-xs text-black-100'>Monthly</span></h4>
          <p className='text-["#5F5F5F"] text-[18px]'>Perfect for starters</p>
        </div>
        <Seperator />
        <ul className='flex flex-col gap-6'>
          <li className='flex items-center gap-3'>
            <Icons.checkmark />
            <span className='text-["#231F20"] text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark  />
            <span className='text-["#231F20"] text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark />
            <span className='text-["#231F20"] text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark />
            <span className='text-["#231F20"] text-base'>Benefit goes here</span>
          </li>
        </ul>
      </div>
      <button className='bg-black-100 w-full mt-12 font-medium p-4 text-base text-white rounded-[100px] flex items-center justify-center'>
        Start for free
      </button>
    </div>
  )
}

export default FreeSubscription