/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react';
import styled from './styled.js';

function saveVideoViewPort(videoRef) {
  if (!videoRef.current.dataStoredViewPort) {
    videoRef.current.dataStoredViewPort = {
      width: videoRef.current.clientWidth,
      height: videoRef.current.clientHeight,
    };
  }
}

// eslint-disable-next-line react/prop-types
const Video = React.forwardRef(({ saveViewPortCallback, style, ...rest }, ref) => {
  const onCanPlay = useCallback(() => {
    saveVideoViewPort(ref);
  }, [ref]);

  const eventHandlers = {
    onCanPlay,
  };

  const props = {
    crossOrigin: 'anonymous',
    controls: true,
    preload: 'auto',
    ...rest,
  };

  const objStyle = {
    display: 'block',
    margin: 'auto',
    ...style,
  };

  const Styled = styled('video');
  return <Styled {...eventHandlers} {...props} style={objStyle} ref={ref} />;
});

export default Video;
