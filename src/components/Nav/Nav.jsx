import React from 'react'
import './Nav.scss'
import kar from './icons/icon1.svg'
import nar from './icons/icon2.svg'
import ran from './icons/icon3.svg'
import rak from './icons/icon4.svg'
const Nav = () => {
  return (
    <nav>
        <ul>
            <li><img src={kar} alt="" /></li>
            <li id='speciel'><img src={nar} alt="" /></li>
            <li><img src={ran} alt="" /></li>
            <li><img src={rak} alt="" /></li>
        </ul>
    </nav>
  )
}

export default Nav