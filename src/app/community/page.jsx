"use client"

import CommunityHero from '@/components/CommunityHero'
import Filter from '@/components/Filter'
import Header from '@/components/header'
import Seperator from '@/components/seperator'
import React, { useState } from 'react'
import star from '@/assets/images/Star 2.png'
import Image from 'next/image'
import Chip from '@/components/chips'
import FooterNav from '@/components/FooterNav'
import { Icons } from '@/components/Icons'
import TogglePhone from '@/components/Buttons/TogglePhone'
import FilterBtn from '@/components/Buttons/FilterBtn'
import team1 from '@/assets/images/team1.png'
import team2 from '@/assets/images/team2.png'
import CommunityDesign from '@/components/communityTabs/CommunityDesign'
import CaseStudies from '@/components/communityTabs/CaseStudies'


const Community = () => {
  const [active, setActive] = useState('Community Design')

  const renderTab = () => {
    if (active === 'Community Design') {
      return <CommunityDesign />
    }
    if (active === 'Case Studies') {
      return <CaseStudies />
    }
    if (active === 'Market Place -Coming Soon') {
      return <CommunityDesign />
    }
  }
  return (
    <div className='w-full bg-white min-h-[100vh]'>
      <Header appPage={true} />
      <Seperator />
      <div className='w-full px-[5%] mt-4'>
        <Filter />
      </div>
      <CommunityHero />
      <div className='w-full my-8 px-[5%]'>
        <div className='bg-primary-100 flex items-center justify-between rounded-xl px-2.5 py-[53px]'>
          <div className='flex gap-4 items-center'>
            <div className='w-[70px] h-[70px]'>
              <Image className='object-contain w-full h-full' src={star} alt='star' width={0} height={0} sizes='100vw'/> 
            </div>
            <p className='text-white text-[18px] font-bold'>SuperTeam is organizing a community hackathon for web3 designers. Want to participate? Find team-mates and start!</p>
          </div>
          <div className='flex items-center gap-4'>
            <button className='bg-white rounded-[21px] text-sm font-medium text-black-100 px-[15px] py-3.5'>Register</button>
            <p className='text-white underline font-semibold text-[15px]'>Learn about Super Team</p>
          </div>
        </div>
        <div className='w-full mt-[50px] mb-10 flex gap-4'>
          <Chip width={19} containerStyle={'rounded-[38px]'} size='text-[33px]' handleClick={() => setActive('Community Design')} title={'Community Design'} isActive={active === 'Community Design'}  />
          <Chip width={19} containerStyle={'rounded-[38px]'} size='text-[33px]' handleClick={() => setActive('Case Studies')} title={'Case Studies'} isActive={active === 'Case Studies'}  />
          <Chip width={19} containerStyle={'rounded-[38px]'} size='text-[33px]' handleClick={() => setActive('Market Place -Coming Soon')} title={'Market Place -Coming Soon'} isActive={active === 'Market Place -Coming Soon'} />
        </div>
        <div className='w-full flex justify-between items-center'>
          {
            active === 'Community Design' && <p className='text-gray-700 font-semibold text-2xl'>Browse community made designs</p>
          }
          {
            active === 'Case Studies' && <p className='text-gray-700 font-semibold text-2xl'>Study crypto based Case Study</p>
          }
          <div className='flex gap-4'>
            <FilterBtn />
            <TogglePhone />
          </div>
        </div>
        {renderTab()}
        <p className='text-black text-4xl mb-8 font-semibold'>Community of your choice</p>
        <div className='flex items-center justify-between gap-7 mb-[400px] w-full'>
          <div className='h-[275px]  w-full'>
            <Image className='object-cover rounded-[32px] w-full h-full' src={team1} alt='team1' width={0} height={0} />
          </div>
          <div className='h-[275px] w-full'>
            <Image className='object-cover rounded-[32px] w-full h-full' src={team2} alt='team1' width={0} height={0} />
          </div>
          <div className='h-[275px] w-full'>
            <Image className='object-cover rounded-[32px] w-full h-full' src={team1} alt='team1' width={0} height={0} />
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  )
}

export default Community