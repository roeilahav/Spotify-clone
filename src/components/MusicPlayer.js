import React, { useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaShareAlt,
  FaPlay,
  FaPause,
  FaForward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ volume, song, imgSrc }) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(); //audio tage
  const progressBar = useRef(); //progress bar
  const [duaration, setDuaration] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duaration);
    setDuaration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changeLoved = () => {
    setLoved(!isLove);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    // <10 -> 09 or 11,12
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty("--played-width", `${(progressBar.current.value / duaration) * 100}%`);
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" id="bla" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>

            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input type="range" className="progressBar" ref={progressBar} onChange={changeProgress} />
          <div className="duaration">
            {duaration && !isNaN(duaration) && calculateTime(duaration) ? calculateTime(duaration) : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
