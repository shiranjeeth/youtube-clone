import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/store/Slice/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from '../Comments/CommentsContainer'
import LiveChat from '../LiveChat/LiveChat'

const WatchPage = () => {
  const [searchParams] = useSearchParams(); 
  console.log(searchParams.get("v"))
  const videoId = searchParams.get("v");


  const dispatch = useDispatch()
  dispatch(closeMenu())
  return (
    <div className='flex w-full'>
    <div>
    <div className='px-5'>
      <iframe width="1100" height="500" 
      src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
<div className='w-full'>
<LiveChat/>
</div>
    </div>
  )
}

export default WatchPage