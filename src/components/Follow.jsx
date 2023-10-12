import React from 'react'

export default function Follow() {
  return (
<div className='color-lght footer'>
        <div className='footer-content1'>
            <h5> Privacy policy  </h5>
            <h5> About Us</h5>
            <h5>Return policy </h5>
        </div>
        <div className='footer-content1 '>
            <h5>Help</h5>
            <h5>Terms & conditions </h5>
            <h5>Careers</h5>
        </div>
    <div className='follow'>
            <h4> Follow us on: </h4>
            <a href="/" style={{textDecoration : 'none'}}>  
            <h5 className='black'> <i className="fa-brands fa-twitter black"></i>Twitter </h5>  </a>
            <a href="/" style={{textDecoration:'none'}}> 
            <h5 className='black'><i class="fa-brands fa-facebook black"></i>Facebook</h5>  </a>
            <a href="/" style={{textDecoration:'none'}}> 
            <h5 className='black'><i class="fa-brands fa-square-instagram black"></i>Instagram</h5>  </a>
    </div>
</div>
  )
}
