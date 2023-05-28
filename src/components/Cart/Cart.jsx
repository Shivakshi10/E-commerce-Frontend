import React from 'react'
import "./cart.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Cart() {

const data = [{
    id:2,
  img:"https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title:"Graphic Tee",
    desc:"Graphic tee",
    isNew:true,
    oldPrice:1100,
    price:950,
},];

  return (
    <div className='cart'>
      <h1 className='carthead' >Products in your Cart</h1>
      {data?.map(item =>(
          <div className='citem' key={item.id}>
     <img className='cimg' src={item.img} alt=""></img>
    <div className='cdetails'>
        <h1 className='det'>{item.title}</h1>
        <p className='pdet'>{item.desc?.substring(0,100)}</p>
        <div className='price' >1 x {item.price}</div>
     </div>
     <DeleteOutlineIcon className='delete' />
    </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>1600 INR</span>
      </div>
 <button className='check'>PROCEED TO CHECKOUT</button>
 <span className='reset'>Reset Cart</span>

    </div>
  )
}
