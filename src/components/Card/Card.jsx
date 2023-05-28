import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

export default function Card({item}) {
  return (
    <Link className='link2' to={`/product/${item.id}`}> <div className='card'>
<div className='images'>
{item.isNew && <span className='newSeas'>New Season</span>}
    <img src={item.img} alt='' className='mainImg'></img>
    
</div>
<h2>{item.title}</h2>
<div className='prices'>
    <h3 className='first'>INR{item.oldPrice}</h3>
    <h3>INR{item.price}</h3>
</div>
    </div>
    </Link>
    
  )
}
