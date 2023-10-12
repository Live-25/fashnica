import React from 'react'
import '../App.css';

export default function Content(props) {
  return (
    <div className='content'>
        <h3> {props.name} </h3>
        <p> {props.content} </p>
    </div>
  )
}
