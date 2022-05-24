/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react';
import classes from './Video.module.css';

function saveVideoViewPort(videoRef) {
  if (!videoRef.current.dataStoredViewPort) {
    videoRef.current.dataStoredViewPort = {
      width: videoRef.current.clientWidth,
      height: videoRef.current.clientHeight,
    };
  }
}

// eslint-disable-next-line react/prop-types
const Video = React.forwardRef(({ className, saveViewPortCallback, ...rest }, ref) => {
  const onCanPlay = useCallback(() => {
    saveVideoViewPort(ref);
  }, [ref]);

  const eventHandlers = {
    onCanPlay,
  };

  const props = {
    controls: true,
    preload: 'auto',
    ...rest,
  };

  // eslint-disable-next-line jsx-a11y/media-has-caption
  return <video className={`${classes.video} ${className}`} {...eventHandlers} {...props} ref={ref} />;
});

export default Video;
