import React from 'react'

const VideoCard = ({data}) => {
    if (!data || data.length === 0) {
        return <div>No videos available</div>; // Display a message if data is empty
      }
    const {snippet,statistics} = data;
    const {channelTitle , title,thumbnails} =  snippet
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-wrap">
    {/* Video Thumbnail */}
    <img
      src={thumbnails.medium.url}
      alt="Thumbnail"
      className="w-full h-auto object-cover"
    />

    {/* Video Details */}
    <div className="p-4">
      <ul className="space-y-2">
        <li className="font-semibold text-lg">{title}</li>
        <li className="text-sm text-gray-500">{channelTitle}</li>
        <li className="text-sm text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  </div>
  )
}

export default VideoCard