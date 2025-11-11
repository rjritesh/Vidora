import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_BY_ID_API, GOOGLE_API_KEY } from '../utils/constants';

const WatchPage = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    fetchVideoById();
  }, [id]);

  const fetchVideoById = async () => {
    const res = await fetch(YOUTUBE_VIDEO_BY_ID_API + id + "&key=" + GOOGLE_API_KEY);
    const json = await res.json();
    setVideoData(json.items[0]);
  };

  if (!videoData) return <p className="p-6 text-white">Loading...</p>;

  const { snippet, statistics } = videoData;

  return (
    <div className="flex flex-col items-center gap-4 pt-20">
      {/* Video */}
      <div className="w-full max-w-[900px]">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          title={snippet.title}
          allowFullScreen
          className="rounded-xl"
        />
      </div>

      {/* Video Details */}
      <div className="w-full max-w-[900px]">
        <h1 className="text-2xl font-bold mt-4">{snippet.title}</h1>
        <p className="text-gray-400">{snippet.channelTitle}</p>
        <p className="text-sm mt-1 text-gray-400">{Number(statistics.viewCount).toLocaleString()} views</p>
        <p className="mt-3 text-gray-300 whitespace-pre-line">{snippet.description}</p>
      </div>
    </div>

  );
};

export default WatchPage;
