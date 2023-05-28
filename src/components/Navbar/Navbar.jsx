import React, { useState } from 'react'
import "./navbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"
import Cart from '../Cart/Cart';


export default function Navbar() {

const [open,setOpen] = useState(false);

  return (
    <div className='navbar'>
    <div className='wrapper'>
        <div className='left'>
            <div className='item'>
                <img className='flag' src='assets/ind.png' alt=''></img>
                <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
                <span>INR</span>
                <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
                <Link className='link' to="/products/1" >Women</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/2" >Men</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/3" >Children</Link>
            </div>
        </div>
      <div className='centre'>
        <Link className='link' to="/">TSTORE</Link>
      </div>
      <div className='right'>
      <div className='item'>
                <Link className='link' to="/products/1" >Homepage</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/1" >About</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/1" >Contact</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/1" >Stores</Link>
            </div>
            <div className='icons'>
                <SearchIcon />
                <PersonOutlineIcon />
                <FavoriteBorderIcon />
                <div className='cartIcon' onClick={e=>setOpen(!open)}>
                   <AddShoppingCartIcon />  
                   <span className='cartSpan'>0</span>
                </div>
               
            </div>
      </div>
    </div>
      {open && <Cart />}
    </div>
  )
}
