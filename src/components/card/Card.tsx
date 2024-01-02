import React, { ReactNode } from 'react'

interface CardProps{

    children:ReactNode
}

const Card = ({children}: CardProps) => {
  return (
    <div className='rounded-lg shadow-lg shadow-pink-500 bg-sky-50' >
        {children}
        </div>
  )
}

export default Card