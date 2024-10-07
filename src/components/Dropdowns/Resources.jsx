import { blogPosts, resources } from '@/utils/data'
import React from 'react'
import { Icons } from '../Icons'
import Image from 'next/image'

const Resources = () => {
  return (
    <div className='absolute flex shadow-lg z-50 bg-white border border-gray-300 rounded-lg top-[180%] left-[50%] translate-x-[-50%]'>
      <div className='min-w-[300px] py-8 px-5'>
        <h4 className='text-primary-100 mb-3 font-semibold text-sm'>Resources</h4>
        <div className='flex flex-col gap-6'>
          {
            resources.map((resource, i) => (
              <div className='flex items-start gap-3' key={resource}>
                <div>
                  {React.createElement(Icons[resource.icon], {color: '#030103', size: 24})}
                </div>
                <div>
                  <h4 className='text-gray-900 text-base whitespace-nowrap mb-2 font-semibold'>{resource.title}</h4>
                  <p className='text-gray-600 text-sm'>{resource.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-gray-50 rounded-r-lg py-8 px-5 w-[500px]'>
      <h4 className='text-primary-100 mb-3 font-semibold text-sm'>Latest blog posts</h4>
      <div className='flex flex-col gap-6'>
        {
          blogPosts.map((post, i) => (
            <div className='flex items-start gap-3' key={post}>
              <Image className='object-cover rounded-md' alt={post.title} src={post.image} width={144} height={8} />
              <div className=''>
                  <h4 className='text-gray-900 line-clamp-2 text-ellipsis text-base mb-2 font-semibold'>{post.title}</h4>
                  <p className='text-gray-600 line-clamp-2 text-ellipsis text-sm'>{post.text}</p>
                </div>
            </div>
          ))
        }
      </div>
      <div className='flex items-center gap-1 mt-6'>
        <span className='text-sm text-primary-100 font-semibold'>All blog posts</span>
        <Icons.arrow_right />
      </div>
      </div>
    </div>
  )
}

export default Resources