import React from 'react'
import '../App.css';

export default function TitleSection(props) {
  return (
    <div id="title-section" className={props.className}>
      <div class="grid-cointainer">
        <div class="grid-item headng"> <h1> {props.title} </h1> </div>
        <div class="grid-item"> <img src={props.image} alt="women" class="img" /> </div>
      </div>
      <h2 style={{textAlign:"center"}}> {props.content}</h2>
      <input type="button" value="Take a free quiz" className="quiz"/>
    </div>
  )
}
