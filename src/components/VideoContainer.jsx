import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router'

const VideoContainer = () => {
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchVideo()
  }, [])

  const fetchVideo = async () => {
    const movieData = await fetch(YOUTUBE_API_KEY);
    const json = await movieData.json();
    setvideos(json.items)
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {videos.map((video) => (
        <Link to={"/watch"}><VideoCard key={video.id} info={video}></VideoCard></Link>
      ))}
    </div>
  );
}

export default VideoContainer