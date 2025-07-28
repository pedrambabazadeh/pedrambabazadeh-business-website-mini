import React from 'react'

export default function SingleCard({title, number, sign=''}) {
  return (
    <div className='single-card'>
        <p className='single-card_number'>{title}</p>
        <p>{number}{sign}</p>
    </div>
  )
}
