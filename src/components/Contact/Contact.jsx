import React from 'react'
import "./contact.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contactWrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
            <input  className='contactInput' type='text' placeholder='Enter your mail...'></input>
            <button className='contactButton'> JOIN US</button>
        </div>
        <div className='Contacticons'>
<FacebookIcon />
<InstagramIcon />
<TwitterIcon />
<GoogleIcon />
<PinterestIcon />
        </div>
      </div>
    </div>
  )
}
