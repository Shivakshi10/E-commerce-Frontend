import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./slider.css";

export default function Slider() {
    const [slide,setSlide] = useState(0);

    const data = [
       "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    ];

    const prevSlide = ()=>{
        if(slide === 0)
        setSlide(2);
        else
        setSlide(slide-1);
    };

    const nextSlide = ()=>{
        if(slide === 2)
        setSlide(0);
        else
        setSlide(slide+1);
    };
  return (
    <div className='slider'>
<div className='Container' >
    <img className='sliderimg' src={data[slide]} alt=""></img>
</div>
<div className='Icons'>
    <div className='icon' onClick={prevSlide}>
        <ArrowBackIosIcon />
    </div>
    <div className='icon' onClick={nextSlide}>
        <ArrowForwardIosIcon />
    </div>
</div>
    </div>
  )
}
