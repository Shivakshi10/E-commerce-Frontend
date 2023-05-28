import React from 'react'
import "./categories.css"

import {Link } from "react-router-dom"

export default function Categories() {
  return (
    <div className='categories'>
     <div className='col'>
        <div className='row'>
            <img className='gridImg' src='https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=' '></img>
            <button className='button'>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
        </div>
        <div className='row'>
        <img className='gridImg' src='https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=600' alt=' '></img>
            <button className='button'>
                <Link className="link" to="/products/1">Women</Link>
            </button>
        </div>
     </div>
     <div className='col'>
        <div className='row'>
        <img className='gridImg' src='https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&w=600' alt=' '></img>
            <button className='button'>
                <Link className="link" to="/products/1">New Season</Link>
            </button>
        </div>
     </div>
     <div className='col col-l'>
        <div className='row'>
            <div className='col'>
            <div className='row'>   <img className='gridImg' src='https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600' alt=' '></img>
            <button className='button'>
                <Link className="link" to="/products/1">Accessories</Link>
            </button></div>
            </div>
            <div className='col'>
            <div className='row'>
            <img className='gridImg' src='https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=600' alt=' '></img>
            <button className='button'>
                <Link className="link" to="/products/1">Shoes</Link>
            </button>
            </div>
            </div>
        </div>
        <div className='row'>
        <img className='gridImg' src='https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600' alt=' '></img>
            <button className='button'>
                <Link className="link" to="/products/1">Men</Link>
            </button>
        </div>
     </div>
    
    </div>
  )
}
