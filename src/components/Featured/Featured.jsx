import React from 'react'
import "./featured.css"
import Card from '../Card/Card'

export default function Featured({type}) {

    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Long sleeved white shirt",
            isNew:true,
            oldPrice:1200,
            price:800,
        },
        {
            id:2,
          img:"https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"Graphic Tee",
            isNew:true,
            oldPrice:1100,
            price:950,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Pink puffer Jacket",
            isNew:true,
            oldPrice:1200,
            price:800,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/833185/pexels-photo-833185.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"White Checkered Dress",
            isNew:true,
            oldPrice:1900,
            price:1300,
        },
    ];
  return (
    <div className='featured'>
      <div className='ftop'>
        <h1 className='fh1'>{type} products</h1>
        <p className='fp'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='fbottom'>
      {data.map(item=>{
           return <Card item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
