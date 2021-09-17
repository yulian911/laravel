import React from "react";
import Progress from "./Progress";
import classes from "./video.module.scss";

const Controls = ({
  handlePlay,
  playing,
  handleVolume,
  volume,
  loadedSeconds,
  playedSeconds,
  funcs,
  fullScreen,
}) => {
  return (
    <>
      <div className={classes.videoControlsPlay} onClick={handlePlay}>
        {!playing ? "Play" : "Pause"}
      </div>
      <div className={classes.videoControls}>
        <div className={classes.videoControls__header}>
          <div>
            <input
              value={volume}
              type="range"
              min="0"
              max="1"
              step="0.1"
              onChange={handleVolume}
            />
          </div>

          <div onClick={fullScreen}>full</div>
        </div>

        <Progress
          loadedSeconds={loadedSeconds}
          playedSeconds={playedSeconds}
          funcChange={funcs}
        />
      </div>
    </>
  );
};

export default Controls;
