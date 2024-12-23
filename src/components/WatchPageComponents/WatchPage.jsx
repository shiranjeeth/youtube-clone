import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/store/Slice/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchParams] = useSearchParams(); 
  console.log(searchParams.get("v"))
  const videoId = searchParams.get("v");


  const dispatch = useDispatch()
  dispatch(closeMenu())
  return (
    <div className='px-5'>
      <iframe width="1100" height="500" 
      src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage