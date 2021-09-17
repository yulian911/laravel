import React from "react";
import classes from "./../video.module.scss";

const Progress = ({ loadedSeconds, playedSeconds, funcChange }) => {
  return (
    <div>
      <input
        value={playedSeconds}
        type="range"
        min="0"
        max={loadedSeconds}
        step="1"
        className={classes.videoControlsProgress}
        onChange={(e) => funcChange(e.target.value)}
      />
    </div>
  );
};

export default Progress;
