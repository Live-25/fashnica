import React from 'react'

export default function Two_section_card(props) {
  return (
    <div className='two-section-card'>
        <div>
          {props.grid-1}
        </div>
        <div> 
          {props.grid-2}
        </div>
    </div>
  )
}
