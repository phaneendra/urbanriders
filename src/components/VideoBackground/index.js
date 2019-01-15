import React from 'react';
import VideoCover from 'react-video-cover'

class VideoBackground extends React.Component {
  state = {
    resizeNotifier: () => {},
  }
  render() {
    const videoOptions = {
      src: 'https://player.vimeo.com/external/198740712.hd.mp4?s=58e1837f23af57d76532a2636067d6173c4ca669&profile_id=119',
      autoPlay: true,
      loop: true,
      muted: true
    };
    const style = {
      width: '150vw',
      height: '150vh',
      position: 'fixed',
      margin: 'auto',
      top: '-25vh',
      left: '-25vw',
      zIndex: -2,
    };
    return (
      <div style={style} >
        <VideoCover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
      </div>
    );
  }
}
export default VideoBackground;