import React from 'react'
import '../App.css';

export default function Roundcards(props) {
  return (
    <div className='round-section color-lght'>
        <div className='round color-dark'> 
            <h3 className='h3-round' > {props.name} </h3> 
        </div>
    </div>
)
    
}
