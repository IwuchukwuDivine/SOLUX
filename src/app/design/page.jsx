import Filter from '@/components/Filter'
import Header from '@/components/header'
import Seperator from '@/components/seperator'
import React from 'react'

const DesignPage = () => {
  return (
    <div className='w-full bg-white min-h-[100vh]'>
      <Header />
      <Seperator />
      <div className='w-full px-[5%] mt-4'>
        <Filter />
        <div className='w-full bg-gray-300 h-[400px] relative'>
          <div className='absolute z-10 w-[300px] h-[300px] right-0  bg-white rounded-t-3xl rounded-bl-3xl'>
            <h3>ddd</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DesignPage