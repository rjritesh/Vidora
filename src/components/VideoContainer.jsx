import React, { useEffect, useState } from 'react'
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchVideo()
  }, [])

  const fetchVideo = async () => {
    const movieData = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await movieData.json();
    setvideos(json.items)
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch/" + video.id}><VideoCard info={video}></VideoCard></Link>
      ))}
    </div>
  );
}

export default VideoContainer