import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div className="w-90 shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
      <img
        src={thumbnails?.maxres?.url}
        alt={title}
        className="w-full h-50 object-center"
      />
      <div className="p-3">
        <h2 className="font-semibold text-sm line-clamp-2">{title}</h2>
        <p className="text-gray-400 text-md mt-1">{channelTitle}</p>
        <p className="text-gray-500 text-xs">{Number(statistics.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
