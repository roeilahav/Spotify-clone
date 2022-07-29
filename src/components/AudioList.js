import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import { FaHeadphones, FaRegHeart, FaHeart, FaRegClock } from 'react-icons/fa'
import { MusicPlayer } from './MusicPlayer';  

function AudioList() {

    const [songs, setSongs] = useState([{id: 0}]);
    const [song, setSong] = useState(songs[0].song);
    const [img, setImg] = useState(songs[0].imgSrc);

    useEffect(() => {
        axios.get('http://localhost:5555/songs')
        .then(function (response) {
            setSongs(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

        const songs = document.querySelectorAll(".songs");

        function changeMenuActive() {
            songs.forEach(n => n.classList.remove('active'));
            this.classList.add("active");
        }

        songs.forEach( n => n.addEventListener('click', changeMenuActive))
    }, [])

    const changeFavourite = (id) => {
        songs.forEach((song) => {
            if(song.id == id) {
                song.favourite = !song.favourite;
            }
        });
        setSongs([...songs]);
    }

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc); 
        setImg(imgSrc);
    }

  return (
    <div className='audioList'>
        <h2 className='title'>
            The list <span>{`${songs.length} songs`}</span>
        </h2>
        <div className='songsContainer'>
            {
                songs && songs.map((song, index) => (
                    <div className='songs' key={song.id}
                    onClick= {() => setMainSong(song?.song, song?.imgSrc)}>
                    <div className='count'>{`#${index + 1}`}</div>
                    <div className='song'>
                        <div className='imgBox'>
                            <img src={song.imgSrc} alt="" />
                        </div>
                    <div className='section'>
                            <p className='songName'>
                                {song?.songName}
                                <span className='spanArtist'>{song?.artist}</span>
                            </p>
                            <div className='hits'>
                                <p className='hit'>
                                    <i>
                                        <FaHeadphones/>
                                    </i>
                                    Num of Views
                                </p>
    
                                <p className='duartion'>
                                    <i>
                                        <FaRegClock/>
                                    </i>
                                    Duartion
                                </p>
    
                                <div className='favourite' onClick={() => 
                                    changeFavourite(song?.id)}>

                                    {
                                        song?.favourite ? (
                                            <i>
                                             <FaHeart/>
                                            </i>
                                        ) : (
                                            <i>
                                                <FaRegHeart/>
                                            </i>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
        <MusicPlayer song={song} imgSrc={img}/>
    </div>
  )
}

export {AudioList};
