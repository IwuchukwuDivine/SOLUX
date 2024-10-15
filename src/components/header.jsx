"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/images/logo.png'
import Avatar from '@/assets/images/Avatar.png'
import { Icons } from './Icons'
import ProfileDropdown from './Dropdowns/Profile'
import Resources from './Dropdowns/Resources'
import { useRouter } from 'next/navigation'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletConnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'


const Header = ({appPage}) => {
  const [showProfile, setShowProfile] = useState(false)
  const [showResources, setShowResources] = useState(false)
  const router = useRouter()
  const { publicKey } = useWallet()
  
  return (
    <nav className='w-full flex items-center justify-between px-[4%] py-6'>
      <div className='flex items-center gap-10'>
        <div onClick={() => router.push('/')} className='flex cursor-pointer items-center gap-2'>
          <Image src={logo} alt='logo' width={50} height={50} />
          <h4 className='text-black text-xl font-semibold'>SoLUX</h4>
        </div>
        <ul className='flex items-center gap-10'>
          <li className='text-gray-600 cursor-pointer text-base font-semibold'>Home</li>
          <li className='flex cursor-pointer items-center gap-2 text-gray-600 text-base font-semibold'>
            <span>Products</span>
            <Icons.chevron_down />
          </li>
          <li className='relative cursor-pointer'>
            <div onClick={() => setShowResources(!showResources)} className='flex items-center gap-2'>
              <span className=' text-gray-600 text-base font-semibold'>Resources</span>
              {showResources ? <Icons.chevron_up /> : <Icons.chevron_down />}
            </div>
            {showResources && <Resources />}
          </li>
          <li className='text-gray-600 cursor-pointer text-base font-semibold'>Design Patterns</li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
      
        <button onClick={() => router.push('/price')} className='flex items-center gap-2 bg-primary-100 justify-center rounded-lg py-2.5 px-4 border border-gray-400 shadow-custom'>
          <Icons.zap />
          <span className='text-white font-semibold text-sm'>Upgrade now</span>
        </button>
        {
          !appPage && 
          <>
            <div>
              <Icons.bookmark />
            </div>
            <div className='relative cursor-pointer tooltip'>
              <Icons.bitcoin />
              <span className='text-xs tooltip-text top-[200%] py-2 px-3 translate-x-[-50%] left-[50%] font-semibold text-white bg-black-100 whitespace-nowrap absolute rounded-[8px]'>Tip us using getcode</span>
            </div>
          </>
        }
        {
          appPage && 
          <>
            <div>
              <Icons.settings size={20} color='#667085' />
            </div>
            <div className='relative cursor-pointer tooltip'>
              <Icons.notification />
            </div>
          </>
        }
{publicKey ?
        <div className='cursor-pointer relative'>
          <div onClick={() => setShowProfile(!showProfile)} className='flex items-center gap-2'>
            <Image  className='rounded-full' width={40} height={40} src={Avatar} alt='avatar' />
            <span className='text-[10px] font-semibold text-black'>@chisom.Bonk</span>
          </div>
          {
            showProfile && <ProfileDropdown  />
          }
        </div> :
        <button onClick={() => router.push('/login')} className='flex items-center gap-2 bg-primary-100 justify-center rounded-lg py-2.5 px-4 border border-gray-400 shadow-custom'>
        {/* <Icons.zap /> */}
        <span className='text-white font-semibold text-sm'>Login</span>
      </button>
       
        }
      <WalletMultiButton style={{ display: 'none' }} />
      </div>
    </nav>
  )
}

export default Header

