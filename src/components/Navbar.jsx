import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import style from './Navbar.module.css'
import Icon from '/martinIcon.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={style.header}>
      <Link to='/'>
        <img src={ Icon } className={style.logo} alt="logo" />
      </Link>
      <div className={style.menucontainer}>
        <ul className={`${style.navmenu} ${click && style.navmenuact}`}>
          <li>
            <Link className={style.link} to='/' onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link className={style.link} to='/about' onClick={handleClick}>About</Link>
          </li>
          <li>
            <Link className={style.link} to='/projects' onClick={handleClick}>Projects</Link>
          </li>
          <li>
            <Link className={style.link} to='/contact' onClick={handleClick}>Contact</Link>
          </li>
        </ul>
        <div className={style.hamcontainer} onClick={handleClick}>
          {click ? (<FaTimes className={style.times}/>) : (<GiHamburgerMenu className={style.hamburger}/>) }
        </div>       
      </div>      
    </div>
  )
}
