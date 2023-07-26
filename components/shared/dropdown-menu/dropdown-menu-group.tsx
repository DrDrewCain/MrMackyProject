"use client";
import React, { ReactElement } from 'react'
import DropdownMenuItem from './dropdown-menu-item'

interface DropdownMenuGroupProps {
    children: ReactElement<typeof DropdownMenuItem> | ReactElement<typeof DropdownMenuItem>[]
}

const DropdownMenuGroup = ({children}: DropdownMenuGroupProps) => {
  return (
    <div className='flex flex-col mt-1 w-full'>
        {children}
        <div className='border-t-[1px] border-gray-300' />
    </div>
  )
}

export default DropdownMenuGroup