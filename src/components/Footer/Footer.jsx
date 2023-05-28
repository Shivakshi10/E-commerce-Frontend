import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='items'>
<h1 className='h1'>Categories</h1>
<span>Women</span>
<span>Men</span>
<span>Shoes</span>
<span>Accessories</span>
<span>New Arrivals</span>
        </div>
        <div className='items'>
        <h1 className='h1'>Links</h1>
<span>FAQS</span>
<span>Pages</span>
<span>Stores</span>
<span>Compare</span>
<span>Cookies</span>
        </div>
        <div className='items'>
            <h1 className='h1'>About</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</span>
        </div>
        <div className='items'>
            <h1 className='h1'>Contact</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='leftb'>
            <span className='logo'>Tstore</span>
            <span className='copyright'> @ Copyright 2023. All Rights Reserved</span>
        </div>
        <div className='rightb'>
            <img className='payment' src='assets/payment.png' alt=''></img>
        </div>
      </div>
    </div>
  )
}
