import { ChildrenType } from '@/core/interface/children.interface'
import React from 'react'

export default function Button({children}:ChildrenType) {
  return (
    <button className='border-white border p-2 px-4 text-3xl uppercase rounded-full font-lexend text-white hover:scale-110 hover:transition-all hover:duration-300 '>{children}</button>
  )
}
