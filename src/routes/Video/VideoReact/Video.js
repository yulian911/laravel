import React, { useState, useRef } from "react";
// import "node_modules/video-react/dist/video-react.css"; // import css
import { API_VIDEO } from "../../../baseUrl";
import classes from "./../video.module.scss";
import { Player, ControlBar, LoadingSpinner } from "video-react";
import Office from "../../../layauts/office/Office";

const Video = () => {
  return (
    <Office>
      <div className={classes.videoWrapper}>
        <div className={classes.video}>
          <Player
            // autoPlay
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <LoadingSpinner />
            <ControlBar autoHide={true} />
          </Player>
        </div>
      </div>
    </Office>
  );
};

export default Video;
