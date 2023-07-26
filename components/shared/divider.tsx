import React from 'react'

interface DividerProps {
    className?: string;
}

const Divider = ({className}: DividerProps) => {
  return (
    <div className={`${className} h-[1px] bg-black my-4`} />
  )
}

export default Divider