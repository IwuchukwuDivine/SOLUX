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

      </div>
    </div>
  )
}

export default DesignPage