import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { API_VIDEO } from "../../../baseUrl";
import classes from "./video.module.scss";

import Office from "../../../layauts/office/Office";
import Controls from "./Controls";
import screenfull from "screenfull";

const Video = () => {
  const [state, setState] = useState({
    playing: false,
    volume: 0,
    loadedSeconds: 1,
    playedSeconds: 0,
  });

  const { playing, volume, loadedSeconds, playedSeconds } = state;
  const refPlayer = useRef();
  const refFullScreen = useRef();
  const handlePlay = () => {
    setState({ ...state, playing: !state.playing });
  };
  const handleVolume = (e) => {
    setState({ ...state, volume: e.target.value });
  };
  const handleProgress = (e) => {
    console.log(e);
    setState({ ...state, ...e });
  };

  const handleProgressControls = (e) => {
    refPlayer.current.seekTo(Number(e));
    // console.log("działa");
  };

  const handleFullScreen = () => {
    screenfull.toggle(refFullScreen.current);
  };

  return (
    <Office>
      <div ref={refFullScreen} className={classes.videoWrapper}>
        <ReactPlayer
          url={`${API_VIDEO}/video.mp4`}
          //   url="https://www.youtube.com/watch?v=Rg-hZPkKAAY"
          playing={playing}
          controls={false}
          width="100%"
          height="auto"
          volume={volume}
          ref={refPlayer}
          onProgress={handleProgress}
        />
        <Controls
          volume={volume}
          handlePlay={handlePlay}
          playing={playing}
          handleVolume={handleVolume}
          loadedSeconds={loadedSeconds}
          playedSeconds={playedSeconds}
          funcs={handleProgressControls}
          fullScreen={handleFullScreen}
        />
      </div>
    </Office>
  );
};

export default Video;
