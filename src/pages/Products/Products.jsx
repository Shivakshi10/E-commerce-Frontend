import React, { useState } from 'react'
import "./products.css"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

export default function Products() {
const catid = parseInt(useParams().id);
const [maxPrice,setmaxPrice] = useState(1000);
const [sort,setSort] = useState(null);


  return (
    <div className='products'>
      <div className='pleft'>
        <div className='filterItem'>
          <h2 className='ph2'>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox' id='1' value={1} />
            <label  className='label' htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='2' value={2} />
            <label className='label' htmlFor='2'>Skirts</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='3' value={3} />
            <label className='label' htmlFor='3'>Blouses</label>
          </div>
        </div>
        <div className='filterItem'>
        <h2 className='ph2'>Filter by Price</h2>
        <div className='inputItem'>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e)=>setmaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        </div>
        <div className='filterItem'>
        <h2 className='ph2'>Sort by</h2>
        <div className='inputItem'>
          <input type='radio' id='asc' value='asc' name='price' onChange={(e)=>setSort("asc")}/>
          <label className='label' htmlFor='asc'>Price (Lowest First)</label>
        </div>
        <div className='inputItem'>
          <input type='radio' id='desc' value='desc' name='price' onChange={(e)=>setSort("desc")}/>
          <label className='label' htmlFor='asc'>Price (Highest First)</label>
        </div>
        </div>
      </div>
      <div className='pright'>
        <img className='catImg' src='https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''></img>
<List catid={catid} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
