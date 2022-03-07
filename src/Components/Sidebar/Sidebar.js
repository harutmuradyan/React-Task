/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Sidebar.scss';

import home from '../assets/icons/home.png'
import stop from '../assets/icons/stop.png'
import search from '../assets/icons/search.png'
import play from '../assets/icons/play.png'
import mask from '../assets/icons/mask.png'
import time from '../assets/icons/time.png'
import bar from '../assets/icons/bar.png'

const Sidebar = ({setMenuActive , menuActive}) => {

    return (
        <div className={menuActive ? "sidebar close" : "sidebar"}>
            <ul className="sidebar-block">
                <li className="sidebar-block__item" 
                    onClick={(e) => 
                        setMenuActive(true)}>
                    <img src={bar} />
                </li>
                <li className="sidebar-block__item">
                    <img src={search} />
                </li>
                <li className="sidebar-block__item">
                    <img src={home} />
                </li>
                <li className="sidebar-block__item">
                    <img src={play} />
                </li>
                <li className="sidebar-block__item">
                    <img src={stop} />
                </li>
                <li className="sidebar-block__item">
                    <img src={mask} />
                </li>
                <li className="sidebar-block__item">
                    <img src={time} />
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;