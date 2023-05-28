import React, { useState } from 'react'
import "./product.css"
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Product() {
const [Img,setImg] = useState(0);
const [quantity,setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]
  return (
    <div className='product'>
      <div className='prleft'>
<div className='images'>
  <img className='primg' src={images[0]} alt=' ' onClick={e =>setImg(0)}></img>
      <img className='primg' src={images[1]} alt=' ' onClick={e=>setImg(1)}></img>
</div>
       <div className='mainImg'>
        <img  className='mainimg' src={images[Img]} alt='' ></img>
      </div>
      </div>
     
      <div className='prright'>
      <h1>Title</h1>
<span className='price'>1200 INR</span>
<p className='pr'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
<div className='quantity'>
  <button className='prbutton' onClick={()=>setQuantity(prev=>prev ===1?1: prev-1)}>-</button>
  {quantity}
  <button className='prbutton' onClick={()=>setQuantity(prev=>prev+1)}>+</button>
</div>
<button className='add'>
  <AddShoppingCartIcon /> ADD TO CART
</button>
<div className='link'>
  <div className='pritem'>
    <FavoriteBorderIcon />Add to Wishlist
  </div>
  <div className='pritem'>
    <BalanceIcon />Add to Compare
  </div>
</div>
<div className='info'>
  <span>Vendor: Zara</span>
  <span>Product Type: Jacket</span>
  <span>Tag:Jacket,Women,Top</span>
</div>
<hr className='phr'/>
<div className='info'>
  <span>DESCRIPTION</span>
  <hr className='prhr'/>
  <span>ADDITIONAL INFORMATION</span>
  <hr className='prhr'/>
  <span> FAQ </span>
</div>
      </div>

    </div>
  )
}
