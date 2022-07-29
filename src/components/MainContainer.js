import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import "../Styles/MainContainer.css";
import { Banner } from "./Banner";
import { AudioList } from "./AudioList";

function MainContainer(props) {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Discography</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          Number of followers - 129<span></span>
        </p>
      </div>
      <AudioList
        volume={props.volume}
        setSong={(songName, artist, imgSrc) => props.setSong(songName, artist, imgSrc)}
      />
    </div>
  );
}

export { MainContainer };
