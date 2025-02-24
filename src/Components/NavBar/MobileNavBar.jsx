import React from 'react'
import NavBarStructure from './NavBarStructure'

export default function MobileMenu({data, show}) {
  return (
    <div className='mobile_menu' data-show={show}>
        <div className='mobile_menu__inner'>
            <NavBarStructure items={data}></NavBarStructure>
        </div>
    </div>
  )
}
