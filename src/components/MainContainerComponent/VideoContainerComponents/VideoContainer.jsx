import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../../../utils/store/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { getVideodata } from '../../../utils/store/Slice/videoSlice';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const dispatch = useDispatch()
const videoData = useSelector(store=>store.videosData.isVideoData);
// console.log(videoData);
  useEffect(()=>{
    if(!videoData){
      getVideos();
    }
  },[])
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const jsonData = await data.json();
   // console.log(jsonData.items)
   dispatch(getVideodata(jsonData.items));



  }
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {/* Ensure videoData is available and then map */}
      {videoData && videoData.length > 0 ? (
        videoData.map((data, index) => {
          return <Link key={data.id} to={"/watch?v=" + data.id} ><VideoCard key={data.id} data={data} /></Link>;
        })
      ) : (
        <p>Loading...</p> // Display loading message until data is available
      )}
    </div>
   
  )
}

export default VideoContainer