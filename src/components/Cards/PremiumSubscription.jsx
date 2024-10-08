"use client"

import React, { useState } from 'react'
import Seperator from '../seperator'
import { Icons } from '../Icons'
import { transferSol } from '../solanaTx'
import { useWallet } from '@solana/wallet-adapter-react'
import { handleWalletConnect } from '../walletProvider/wallectAction'

const PremiumSubscription = () => {
  const {publicKey, sendTransaction} = useWallet()
  const [txMessage, setTxMessage] = useState("")
  const [loading, setLoading] = useState(Boolean)

  const payment = async () => {
    setTxMessage("")
    try {
      setLoading(true)
      const tx = await transferSol(publicKey, 0.14, sendTransaction);

      if (!tx.err) {
        const message = "Transaction confirmed successfully"
        console.log('Transaction confirmed successfully.');
        setTxMessage(message)
      } else {
        const message = `'Transaction failed:', ${tx.err}`
        console.error(message);
        throw new Error(message)
       
      }
    } catch (error) {
      console.error('Error during transaction:', error);
      setTxMessage(error.message)
      return
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className='bg-black-100 cursor-pointer rounded-[30px] py-[42px] px-[31px]'>
      <div className='flex w-full gap-[40px]'>
        <div className='flex flex-col justify-between'>
          <span className='bg-primary-700 rounded-[32px] text-white text-xs py-1.5 px-3.5'>Premium Plan</span>
          <h4 className='text-6xl font-semibold text-white'>$ 19 <span className='text-xs'>Monthly</span></h4>
          <p className='text-white text-[18px]'>Perfect for Business</p>
        </div>
        <Seperator />
        <ul className='flex flex-col gap-6'>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
        </ul>
        <ul className='flex flex-col gap-6'>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
          <li className='flex items-center gap-3'>
            <Icons.checkmark color="#ffffff" />
            <span className='text-white text-base'>Benefit goes here</span>
          </li>
        </ul>
      </div>
      <button onClick={publicKey ? payment : handleWalletConnect} disabled={loading} className='bg-white w-full mt-12 font-medium p-4 text-base text-blue-100 rounded-[100px] flex items-center justify-center'>
        {loading ? "Loading..." : "Make Payment"}
      </button>
      <p className='text-white text-base mt-2'>{txMessage}</p>
    </div>
  )
}

export default PremiumSubscription