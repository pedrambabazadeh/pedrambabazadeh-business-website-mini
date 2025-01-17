import React from 'react'

export default function NavBarStructure(props) {
 const scrollToSec = (id) =>
 {
    let inTo = document.getElementById(id);
    if(inTo)
    {
      inTo.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
 }
  return (
  <div>
    <ul className='nav-bar_ul'>
        {props.items.map((item, index) => {
            return(
            <li key={index} onClick={()=>scrollToSec(item.id)}>
                {item.name}
            </li>
            )
        })}
    </ul>
  </div>
  )
}
