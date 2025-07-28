import React from 'react'
import './BlogsCard.css'

export default function BlogsCard({image, description, link}) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='blog-card' style={{backgroundImage: `url(${image})`}}>
            <p className='blog-card_description'>{description}</p>
        </div>
    </a>
  )
}