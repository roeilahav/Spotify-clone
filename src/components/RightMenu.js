import React from 'react'
import '../Styles/RightMenu.css';
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from 'react-icons/fa'
import Profile from '../img/profile.jpg';

function RightMenu() {
  return (
    <div className='rightMenu'>
      <div className='goPro'>
        <i>
          <FaCrown />
          <p>
            Go Pro <span></span>
          </p>
        </i>
        <i>
          <FaBell/>
        </i>
      </div>
      <div className='profile'>
        <i>
          <FaCogs/>
        </i>
      </div>
    </div>
  )
}

export { RightMenu };