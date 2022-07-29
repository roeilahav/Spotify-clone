import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeadphones, FaRegHeart, FaHeart, FaRegClock } from "react-icons/fa";
import { MusicPlayer } from "./MusicPlayer";

function AudioList(props) {
  const [songs, setSongs] = useState([{ id: 0 }]);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImg] = useState(songs[0].imgSrc);

  useEffect(() => {
    let apiUrl = window.location.href.replace("3000", "8080");
    axios
      .get(`${apiUrl}songs`)
      .then(function (response) {
        setSongs(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    const fetchedSongs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      fetchedSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    fetchedSongs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id) => {
    songs.forEach((iSong) => {
      if (iSong.id == id) {
        iSong.favorite = !iSong.favourite;
      }
    });
    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc, songName, artist) => {
    setSong(songSrc);
    setImg(imgSrc);
    props.setSong(songName, artist, imgSrc);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${songs.length} songs`}</span>
      </h2>
      <div className="songsContainer">
        {songs &&
          songs.map((iSong, index) => (
            <div
              className="songs"
              key={iSong.id}
              onClick={() => setMainSong(iSong?.song, iSong?.imgSrc, iSong?.songName, iSong?.artist)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={iSong.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {iSong?.songName}
                    <span className="spanArtist">{iSong?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      Verified artist 
                    </p>

                    <div className="favourite" onClick={() => changeFavourite(iSong?.id)}>
                      {iSong?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer volume={props.volume} song={song} imgSrc={img} />
    </div>
  );
}

export { AudioList };
