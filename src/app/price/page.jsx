import FreeSubscription from '@/components/Cards/FreeSubscription'
import PremiumSubscription from '@/components/Cards/PremiumSubscription'
import Header from '@/components/header'
import React from 'react'

const Price = () => {
  return (
    <div className='w-full flex flex-col bg-white h-[100vh]'>
      <Header appPage={true} />
      <div className='w-full flex gap-8 flex-col items-center justify-center bg-gray-800 flex-1 text-center'>
        <div className='bg-primary-400 py-1.5 px-3.5 text-xs rounded-2xl text-brown-100'>
          Purchase your Ticket
        </div>
        <h3 className='text-black-200 text-5xl font-medium'>Your Access to Web3 Design Library</h3>
        <p className='text-gray-150 text-[18px] max-w-[516px]'>Explore products built on Solana, their UI, Flows, Screens and everything Design.</p>
        <div className='bg-white flex items-center gap-6 px-2.5 py-3.5 rounded-lg'>
          <span className='text-gray-150 text-base'>Month</span>
          <div className='flex'>
            <input  id="mode-toggle" type="checkbox" />
            <label class="toggle-switch"for="mode-toggle" ></label>
          </div>
          <span className='text-gray-150 text-base'>Year</span>
        </div>
        <div className='flex mt-[50px] items-start gap-8'>
          <FreeSubscription />
          <PremiumSubscription />
        </div>
      </div>
    </div>
  )
}

export default Price