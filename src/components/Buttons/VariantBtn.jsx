import React from 'react'
import { Icons } from '../Icons'

const VariantBtn = ({icon, title, outline}) => {
  return (
    <button className={`rounded-3xl font-medium text-base py-3 px-6 flex items-center justify-center gap-4 ${outline ? 'border border-black-100 text-black-100' : 'text-white bg-black-100'}`}>
      {React.createElement(Icons[icon], {color: outline ? '#030103' : '#ffffff', size: 24})}
      <span>{title}</span>
    </button>
  )
}

export default VariantBtn