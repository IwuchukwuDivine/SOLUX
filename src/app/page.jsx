"use client"

import DesignCard from '@/components/DesignCard'
import Filter from '@/components/Filter'
import { Icons } from '@/components/Icons'
import Chip from '@/components/chips'
import Register from '@/components/Register'
import Header from '@/components/header'
import Seperator from '@/components/seperator'
import { appsData, data } from '@/utils/data'
import React, { useState } from 'react'

const Home = () => {
  const [phone, setPhone] = useState('IOS')
  const [activeApp, setActiveApp] = useState(appsData[0])
  const halfLength = Math.ceil(appsData.length / 2)
  const firstHalf = appsData.slice(0, halfLength)
  const secondHalf = appsData.slice(halfLength)
  return (
    <div className='w-full select-none bg-white min-h-[100vh]'>
      <Header/>
      <Seperator />
      <div className='w-full px-[5%] mt-4'>
        <Filter />
        <div className='w-full my-[33px] flex items-center justify-between'>
          <h3 className='text-2xl font-semibold text-gray-700'>Apps</h3>
          <div className='flex items-center gap-6'>
            <h5 className='text-gray-700 italic underline font-semibold'>Browse Solana Communities</h5>
            <div className='bg-gray-300 flex items-start px-1.5 rounded-[32px] py-0.5'>
              <h5 onClick={() => setPhone('IOS')} className={`text-base cursor-pointer font-medium px-6 rounded-[21px] py-3.5 ${phone === 'IOS' ? 'text-white bg-black-100' : 'text-black'}`}>IOS</h5>
              <h5 onClick={() => setPhone('Android')} className={`text-base font-medium cursor-pointer px-6 rounded-[21px] py-3.5 ${phone === 'Android' ? 'text-white bg-black-100' : 'text-black'}`}>Android</h5>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center gap-3 overflow-auto'>
          {
            firstHalf.map((app, i) => (
              <Chip isActive={app === activeApp} key={app} title={app} />
            ))
          }
        </div>
        <div className='w-full mt-[23px] flex items-center gap-3 overflow-auto'>
          {
            secondHalf.map((app, i) => (
              <Chip isActive={app === activeApp} key={i} title={app} />
            ))
          }
        </div>
        <div className='mt-[60px]'>
          <h3 className='text-5xl mb-8 font-semibold text-gray-700'>Discover</h3>
          <div className='w-full gap-1 grid lg:grid-cols-4 md:grid-cols-3'>
            {
              data.map((app, i) => (
                <DesignCard key={i} design={app} />
              ))
            }
          </div>
        </div>
        <Register />
      </div>
    </div>
  )
}

export default Home
