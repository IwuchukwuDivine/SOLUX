"use client"

import React from 'react'
import Image from 'next/image'
import study from '@/assets/images/study.png'
import study1 from '@/assets/images/study1.png'
import study2 from '@/assets/images/study2.png'
import study3 from '@/assets/images/study3.png'
import study4 from '@/assets/images/study4.png'
import study5 from '@/assets/images/study5.png'

import phantom from '@/assets/logos/phantom.png'
import solflare from '@/assets/logos/solflare.png'
import parcl from '@/assets/logos/parcl.png'
import bonk from '@/assets/logos/bonk.png'


const CaseStudies = () => {
  const studies = [
    {
      name: 'PHANTOM CASE STUDY',
      logo: phantom,
      image: study5
    },
    {
      name: 'SOLFLARE CASE STUDY',
      logo: solflare,
      image: study
    },
    {
      name: 'PARCL CASE STUDY',
      logo: parcl,
      image: study1
    },
    {
      name: 'SOLFLARE CASE STUDY',
      logo: parcl,
      image: study3
    },
    {
      name: 'BONK CASE STUDY',
      logo: bonk,
      image: study4
    },
    {
      name: 'All Domains ID',
      logo: bonk,
      image: study3
    }
  ]
  return (
    <div className='w-full mb-[150px] mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
      {
        studies.map((study) => (
          <div key={study} className='bg-gray-300 rounded-[32px] flex flex-col gap-[50px] items-start p-5'>
            <Image src={study.logo} objectFit='cover' alt='phoenix' width={88} height={76} className='rounded-2xl' />
            <Image className='m-auto' src={study.image} objectFit='contain' objectPosition='center' alt='study' width={500} height={387} />
            <div className='flex w-full justify-between items-center'>
              <h4 className='text-black text-2xl font-semibold'>{study.name}</h4>
              <button className='bg-primary-100 rounded-[64px] p-2.5 text-white font-semibold text-base'>Read</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CaseStudies
