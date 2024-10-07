import React from 'react'
import { Icons } from '../Icons'
import Chip from '../chips'
import Search from '../Search'

const FilterBy = ({closeCard}) => {
  const filterOptions = [
    {
      title: 'Categories',
      options: ["Blockchain Based Social Networks", "Decentralized Finance Platforms(DeFi)"]
    },
    {
      title: 'UI Elements',
      options: ["Wallet Connect Button", "Network Selector", "Token Approval", "Token Swap UI"]
    },
    {
      title: 'Flows',
      options: ["Wallet Connect Flow", "Staking Flow", "NFT Minting", "Token Swap"]
    },
    {
      title: 'Screens',
      options: ["Home/Dashboard", "Wallet Screen", "Bridge Screen", "Explore Screen"]
    }
  ]
  return (
    <div className='absolute min-w-[650px] left-0 top-[100%] shadow-lg px-5 py-8 bg-white z-50 border rounded-lg'>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <h4 className='text-[32px] font-semibold text-gray-700'>Filter By</h4>
          <Icons.filter size={24} />
        </div>
       <div  onClick={closeCard}>
        <Icons.close size={24} />
       </div>
      </div>
      <Search otherStyles={'w-full my-8'} />
      <div className='mt-8 flex flex-col gap-8'>
        {
          filterOptions.map((option, i) => (
            <div key={option.title}>
              <div className='flex items-center gap-3 mb-4'>
                <Icons.dot />
                <p className='text-gray-700 text-sm font-medium'>{option.title}</p>
              </div>
              <div className='w-full flex items-center gap-3 overflow-auto'>
                {
                  option.options.map((option, i) => (
                    <Chip key={option} title={option} />
                  ))
                }
              </div>
            </div>
          )
        )
        }
      </div>
    </div>
  )
}

export default FilterBy