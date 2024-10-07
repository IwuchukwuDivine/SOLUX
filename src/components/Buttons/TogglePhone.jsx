import React, {useState} from 'react'

const TogglePhone = () => {
  const [phone, setPhone] = useState('IOS')
  return (
    <div className='bg-gray-300 flex items-start px-1.5 rounded-[32px] py-0.5'>
      <h5 onClick={() => setPhone('IOS')} className={`text-base cursor-pointer font-medium px-6 rounded-[21px] py-3.5 ${phone === 'IOS' ? 'text-white bg-black-100' : 'text-black'}`}>IOS</h5>
      <h5 onClick={() => setPhone('Android')} className={`text-base font-medium cursor-pointer px-6 rounded-[21px] py-3.5 ${phone === 'Android' ? 'text-white bg-black-100' : 'text-black'}`}>Android</h5>
    </div>
  )
}

export default TogglePhone