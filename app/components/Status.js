'use client';
import { useState, useEffect } from 'react';

export default function VideoStatusUsingAPI({ videoRef, isAPIReady, video }) {
  const [status, setStatus] = useState('NA');
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!isAPIReady) return;
    if (!videoRef) {
      setPlayer(null);
      return;
    }
    let playerInstance = null;
    try {
      playerInstance = window.VdoPlayer.getInstance(videoRef);
    } catch (error) {
      playerInstance = new window.VdoPlayer(videoRef);
    }
    window.player = playerInstance;
    setPlayer(playerInstance);
    const updateStatus = () => {
      setCurrentTime(playerInstance.video.currentTime);
      setDuration(playerInstance.video.duration);
    };
    playerInstance.video.addEventListener('play', () => setStatus('Playing'));
    playerInstance.video.addEventListener('pause', () => setStatus('Paused'));
    playerInstance.video.addEventListener('canplay', () => setStatus('Ready'));
    playerInstance.video.addEventListener('timeupdate', updateStatus);
    return () => {
      playerInstance.video.removeEventListener('play', () =>
        setStatus('Playing')
      );
      playerInstance.video.removeEventListener('pause', () =>
        setStatus('Paused')
      );
      playerInstance.video.removeEventListener('canplay', () =>
        setStatus('Ready')
      );
      playerInstance.video.removeEventListener('timeupdate', updateStatus);
    };
  }, [isAPIReady, videoRef]);

  // return (
  //   < div className='api-controls inline text-white absolute bottom-0'>
  //     <div>Controls via API</div>
  //     <div className='btn' onClick={handleBackwards}>
  //       -10
  //     </div>
  //     <div>Status: {status}</div>
  //     <div>CurrentTime: {currentTime}</div>
  //     {/* <div className='btn' onClick={handleForwards}>
  //       +10
  //     </div> */}
  //   </div >
  // );

  return null;
}
