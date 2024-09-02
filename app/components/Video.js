import React, { useCallback, useEffect, useRef, useState } from 'react';
import useVdocipher from '../hooks/useVdocipherAPI';
import { extractVideoParams } from '../utils/format';
import VideoStatusUsingAPI from './Status';

const VideoComponent = ({ video }) => {
  const { loadVideo, isAPIReady } = useVdocipher();
  const videoContainerRef = useRef();
  const [videoRef, setVideoRef] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const addVideo = useCallback(
    async (videoUrl) => {
      if (videoLoaded || !videoUrl) return;
      const { otp, playbackInfo } = extractVideoParams(videoUrl);
      if (otp && playbackInfo) {
        videoContainerRef.current?.classList.add('haveVideo');
        const video = loadVideo({
          otp,
          playbackInfo,
          container: videoContainerRef.current,
          configuration: {
            controls: 'on',
            litemode: true,
          },
        });
        setVideoRef(video);
        setVideoLoaded(true);
      }
    },
    [videoLoaded, loadVideo, setVideoLoaded, setVideoRef, videoContainerRef]
  );

  useEffect(() => {
    if (video) {
      addVideo(video);
    }
  }, [video, addVideo]);

  return (
    <>
      <div className='vdo-container' ref={videoContainerRef} ></div>
      <VideoStatusUsingAPI videoRef={videoRef} isAPIReady={isAPIReady} video={video} key={video?.id} />
    </>
  );
};

export default VideoComponent;
