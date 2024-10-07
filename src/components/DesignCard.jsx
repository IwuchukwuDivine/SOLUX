import React from 'react'
import Image from 'next/image'
import { Icons } from './Icons'
import { useRouter } from 'next/navigation'

const DesignCard = ({design}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/design`)} className='bg-gray-300 cursor-pointer rounded-md flex flex-col items-center min-w-[256px] py-2 px-4'>
      <div className='bg-gray-200 flex items-center gap-1.5 rounded-xl mix-blend-multiply py-1 px-2'>
        <p className='bg-white px-1.5 py-0.5 rounded-xl text-[8.66px] font-medium text-gray-700'>New Feature</p>
        <p className='text-gray-700 font-medium text-[8.66px]'>We’ve just released a new feature</p>
      </div>
      <div className='mt-3'>
        <Image className='rounded-lg w-[200px] h-auto' sizes="100vw" width={200} height={0} alt={design.name} src={design.image} />
        <div className='flex items-center justify-between w-full mt-2'>
          <div className='flex items-center gap-2'>
            <Image src={design.logo} alt={design.name} width={28} height={28} />
            <p className='text-black-100 text-[8.66px] font-medium'>{design.name}</p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px] flex items-center justify-center bg-gray-100 rounded-md cursor-pointer'>
              <Icons.bookmark />
            </div>
            <div className='w-[30px] h-[30px] flex items-center justify-center bg-gray-100 rounded-md cursor-pointer'>
              <Icons.download />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignCard