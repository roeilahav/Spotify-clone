import React from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones } from "react-icons/fa";
function Banner() {
  return (
    <div className="banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="topleft">
          <p>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Roei's Stream House</h2>
              <img src={check} alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              Home<span></span>
            </p>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
