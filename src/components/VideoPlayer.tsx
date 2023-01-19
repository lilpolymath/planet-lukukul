// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { Play, Pause } from 'react-feather';

import image from '@/assets/black.png';

const VideoPlayer = ({ source }) => {
  const base = source?.substr(0, source.length - 3);
  const posterImage = image.src;
  const ogg = base + 'ogg';
  const webm = base + 'webm';

  const [play, setPlay] = useState(false);

  useEffect(() => {
    // Does the browser actually support the video element?
    let supportsVideo = !!document.createElement('video').canPlayType;

    if (supportsVideo) {
      let video = document.getElementById('video');

      let videoControls = document.getElementById('video-controls');
      let videoContainer = document.getElementById('videoContainer');

      // Mute and Hide the default controls
      // video.muted = true;
      video.controls = false;

      // Obtain handles to buttons and other elements
      let playpause = document.getElementById('playpause');

      // Changes the button state of certain button's so the correct visuals can be displayed with CSS
      const changeButtonState = (type) => {
        // Play/Pause button
        if (type == 'playpause') {
          if (video.paused || video.ended) {
            setPlay(false);
            playpause.setAttribute('data-state', 'play');
            videoControls.setAttribute('data-state', 'invisible');
          } else {
            setPlay(true);
            playpause.setAttribute('data-state', 'pause');
            videoControls.setAttribute('data-state', 'visible');
          }
        }
      };

      if (document.addEventListener) {
        ['play', 'pause'].map((action) =>
          video.addEventListener(
            action,
            () => {
              changeButtonState('playpause');
            },
            false
          )
        );

        // Add events for all buttons
        playpause.addEventListener('click', (e) => {
          if (video.paused || video.ended) video.play();
          else video.pause();
        });
      }
    }
  }, []);

  return (
    <section className='video-container'>
      <figure id='videoContainer'>
        <video
          id='video'
          poster={posterImage}
          controls={false}
          preload='metadata'
        >
          <source src={source} type='video/mp4' />
        </video>
        <div data-state='play' id='video-controls'>
          <button id='playpause'>{play ? <Pause /> : <Play />}</button>
        </div>
      </figure>
    </section>
  );
};

export default VideoPlayer;
