import Image from 'next/image'
import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className='bg-gray-300 rounded-[6px] px-4 pt-1.5'>
      <Image alt='image' src={image} width={0} height={0} className='rounded-[6px]' />
    </div>
  )
}

export default ImageCard