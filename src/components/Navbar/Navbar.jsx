import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImage from '../../assets/profile_img.png'
import dropdownIcon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className="navbar_left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My Lists</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={searchIcon} alt="" className='icons' />
        <p>Children</p>
        <img src={bellIcon} alt="" className='icons' />
        <div className="navbar_profile">
          <img src={profileImage} alt="" className='profile' />
          <img src={dropdownIcon} alt=""  />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
       </div>
       
  )
}

export default Navbar