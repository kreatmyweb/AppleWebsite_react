// AIzaSyBHfDnoXMd0lRhviPpIef6kPPkHpUfFpjE
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./youtube.css";
function Youtube() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_Key}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
    )
      .then((res) => res.json())
      .then((data) => {
        const videoData = data.items;
        setVideo(videoData);
      });

    //   (async () => {
    //     const res = await axios.get(
    //       `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_Key}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
    //     );
    //     console.log(res.data.item);
    //   })();
  }, []);
  // console.log(video);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {video?.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThuumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube;

//request for 9 apple videos
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBHfDnoXMd0lRhviPpIef6kPPkHpUfFpjE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9

//request for apples id
//https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBHfDnoXMd0lRhviPpIef6kPPkHpUfFpjE&forUsername=Apple&part=id
