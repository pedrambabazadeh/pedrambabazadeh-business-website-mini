import React from 'react'
import './services.css'
import { Part } from '../../Components'

export default function Services() {
  return (
    <Part title="Our services" className="services"
      data="new part is working successfullyLorem ipsum odor amet, consectetuer adipiscing elit. Dignissim imperdiet molestie finibus massa; sollicitudin odio fusce. Rutrum volutpat at lorem varius vitae adipiscing posuere sollicitudin"
      color="#C52F91">
        {/*<img src='./backTriangle_1.png' style={{width:'200px', position:'absolute', left: '40%'}}/>*/}
        <div id='services' className="messy-list">
          <ul>
          <li>
              Responsive Web design
            </li>
            <li>
              Digital marketing and more
            </li>
            <li>
              Search Engine Optimization
            </li>
            <li>
              Graphic design and visual branding
            </li>
            <li>
              Social media management
            </li>
            <li>
              Mobile application development
            </li>
            <li>
              Artificial intelligence development
            </li>
          </ul>
        </div>
      </Part>
  )
}
