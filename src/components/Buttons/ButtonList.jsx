import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
  const buttonList = [
    "All",
    "Games",
    "Music",
    "Movies",
    "News",
    "Sports",
    "Live",
    "Popular",
    "Technology",
    "Comedy",
  ];
  
  return (
    <div className='flex flex-wrap'>
      {buttonList.map((item,index)=>{
        return <Buttons key={index} name={item}/>
      })}
    
    </div>

  )
}

export default ButtonList