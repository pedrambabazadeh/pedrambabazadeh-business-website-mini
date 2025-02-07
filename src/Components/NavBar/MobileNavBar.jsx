import React from 'react'
import {default as data} from './NavBarData'
import NavBarStructure from './NavBarStructure'

export default function MobileMenu() {
  return (
    <div className='mobile_menu'>
        <div className='mobile_menu__inner'>
            <NavBarStructure items={data}></NavBarStructure>
        </div>
    </div>
  )
}
