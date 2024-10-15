"use client"

import React from 'react'
import case1 from '@/assets/images/case1.png'
import case2 from '@/assets/images/case2.png'
import case3 from '@/assets/images/case3.png'
import Image from 'next/image'

const CommunityDesign = () => {
  return (
    <div className='w-full mt-10 mb-[150px] grid grid-cols-1 md:grid-cols-3 gap-8'>
      <Image className='object-cover rounded-[32px] w-full h-full' src={case1} alt='case1' width={0} height={0} />
      <Image className='object-cover rounded-[32px] w-full h-full' src={case2} alt='case1' width={0} height={0} />
      <Image className='object-cover rounded-[32px] w-full h-full' src={case3} alt='case1' width={0} height={0} />
      <Image className='object-cover rounded-[32px] w-full h-full' src={case1} alt='case1' width={0} height={0} />
      <Image className='object-cover rounded-[32px] w-full h-full' src={case2} alt='case1' width={0} height={0} />
      <Image className='object-cover rounded-[32px] w-full h-full' src={case3} alt='case1' width={0} height={0} />
    </div>
  )
}

export default CommunityDesign
