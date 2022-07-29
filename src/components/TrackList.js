import React from "react";
import { BsVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

function TrackList(props) {
  return (
    <div className="trackList">
      <div className="top">
        <img src={props.song.img} alt="" />
        <p className="trackName">
          {props.song.name} <span className="trackSpan">{props.song.artist}</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsVolumeUpFill />
        </i>
        <input type="range" onChange={(e) => props.setVolume(e.target.value / 100)} />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { TrackList };
