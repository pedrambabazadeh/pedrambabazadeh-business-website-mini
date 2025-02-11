import React from 'react'
import NavBarStructure from './NavBarStructure'

export default function MobileMenu({data}) {
  return (
    <div className='mobile_menu'>
        <div className='mobile_menu__inner'>
            <NavBarStructure items={data}></NavBarStructure>
        </div>
    </div>
  )
}
