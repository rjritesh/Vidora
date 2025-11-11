

// 1️⃣ Google API Key
export const GOOGLE_API_KEY = "AIzaSyBlX9dl8o6h2LZ-Hu50mzyx4yWJd3om4dA";

// 2️⃣ Homepage / popular videos URL (trending)
export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

// 3️⃣ WatchPage / single video by ID
export const YOUTUBE_VIDEO_BY_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=";
