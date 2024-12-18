import React from 'react'
import ButtonList from '../Buttons/ButtonList'
import VideoContainer from './VideoContainerComponents/VideoContainer'

const MainContainer = () => {
  return (
  <>
  <div className='flex flex-col'>
  <ButtonList/>
  <VideoContainer/>
  </div>
  </>
  )
}

export default MainContainer