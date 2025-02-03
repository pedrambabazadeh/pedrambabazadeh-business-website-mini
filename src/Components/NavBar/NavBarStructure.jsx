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
            <li
              onMouseOver={(e)=>e.target.style.textShadow = `0px 0px 10px ${item.color}`}
              onMouseLeave={(e)=>e.target.style.textShadow = 'unset'}
              key={index} onClick={()=>scrollToSec(item.id)}>
                {item.name}
            </li>
            )
        })}
    </ul>
  </div>
  )
}
