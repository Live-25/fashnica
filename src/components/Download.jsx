import React from 'react'
import '../App.css';

export default function Download() {
    return (
        <div className='color-dark download'>
            <div className='grd-1'> 
                <h3> Download our App</h3>
                <div className='download-fav'> 
                    <button type='button' className='button-download'><i class="fa-brands fa-google-play button-store"></i>Google play store </button>
                    <button type='button' className='button-download'><i class="fa-brands fa-apple button-store"></i>App store </button>
                </div>
            </div>
            <div  className='grd-2'> 
                <h4> For any help:</h4>
                <h5> Call us at - </h5>
                <h5> XXXXXXXXXX </h5>
            </div> 
        </div>
        )      
}
  