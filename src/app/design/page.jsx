"use client"

import Filter from '@/components/Filter'
import Hero from '@/components/Hero'
import Header from '@/components/header'
import Seperator from '@/components/seperator'
import React, {useState} from 'react'
import logo from '@/assets/logos/solflare.png'
import Image from 'next/image'
import user1 from '@/assets/users/Ellipse 1.png'
import user2 from '@/assets/users/Ellipse 2.png'
import user3 from '@/assets/users/Ellipse 3.png'
import VariantBtn from '@/components/Buttons/VariantBtn'
import { Icons } from '@/components/Icons'
import { onboardingData, tokenData } from '@/utils/data'
import ImageCard from '@/components/ImageCard'
import FooterNav from '@/components/FooterNav'
import TogglePhone from '@/components/Buttons/TogglePhone'
import FilterBtn from '@/components/Buttons/FilterBtn'



const DesignPage = () => {
  return (
    <div className='w-full bg-white min-h-[100vh]'>
      <Header appPage={true} />
      <Seperator />
      <div className='w-full px-[5%] mt-4 mb-[400px]'>
        <Filter />
        <Hero />
        <div>
          <div className='bg-primary-300 rounded-3xl w-fit flex items-center justify-center py-3.5 px-6'>
            <Image width={181} height={181} objectFit='contain' alt='logo' src={logo} />
          </div>
          <div className='w-[40%] my-8'>
            <h3 className='text-6xl mb-6 font-semibold text-gray-700'>Solflare - Swap, Send and More</h3>
            <p className='font-medium text-gray-700 text-2xl'>Solana software wallets that allows users to send, receive, stoe and securely stake SPL tokens. </p>
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center'>
              <Image alt='user1' objectFit='cover' src={user1} width={67} height={67} className='rounded-full' />
              <Image alt='user2' objectFit='cover' src={user2} width={67} height={67} className='rounded-full -ml-4' />
              <Image alt='user3' objectFit='cover' src={user3} width={67} height={67} className='rounded-full -ml-4' />
            </div>
            <p className='text-gray-700 font-medium text-2xl'>Solflare.com Designers</p>
          </div>
          <div className='flex gap-4 mt-4'>
            <VariantBtn title={'Save'} icon='bookmark' />
            <VariantBtn title='Download' outline={true} icon={'download_01'} />
            <VariantBtn title='Share' outline={true} icon={'share'} />
          </div>
          <div className='flex gap-4 my-12'>
            <div className='flex w-[208px] h-[52px] justify-center items-center gap-2 py-0.5 rounded-2xl px-2 bg-gray-300'>
              <Icons.dot />
              <span>Screens</span>
            </div>
            <div className='flex w-[208px] h-[52px] justify-center items-center gap-2 py-0.5 rounded-2xl px-2 border border-black-100'>
              <Icons.dot />
              <span>Videos</span>
            </div>
            <TogglePhone />
            <FilterBtn />
          </div>
        </div>
        <div className='mb-20'>
          <h2 className='text-gray-700 font-semibold text-6xl flex items-center mb-8 gap-2'>
            <Icons.dot size={26} />
            ONBOARDING
          </h2>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
              onboardingData.map((item, i) => (
               <ImageCard key={item} image={item} />
              ))
            }
          </div>
        </div>
        <div className='mb-20'>
          <h2 className='text-gray-700 font-semibold text-6xl flex items-center mb-8 gap-2'>
            <Icons.dot size={26} />
            Token
          </h2>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
              tokenData.map((item, i) => (
               <ImageCard key={item} image={item} />
              ))
            }
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  )
}

export default DesignPage