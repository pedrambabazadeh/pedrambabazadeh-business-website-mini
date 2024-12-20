import React from 'react'
import './footer.css'
import {FooterContent} from './../../Components'

export default function Footer({children}) {
  return (
    <footer>
      {children}
      <FooterContent/>
    </footer>
  )
}
