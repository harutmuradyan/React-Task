/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Menu.scss';

import home from '../assets/icons/home.png'
import stop from '../assets/icons/stop.png'
import search from '../assets/icons/search.png'
import play from '../assets/icons/play.png'
import mask from '../assets/icons/mask.png'
import time from '../assets/icons/time.png'
import user from '../assets/icons/user.png'

const Menu = ({menuActive , setMenuActive}) => {
    return (
        <div className={menuActive ? "menu active" : "menu"}>
            <div className="menu-content">
                <div className="menu-user">
                    <button className="menu-user__btn">
                        <img src={user} className="menu-user__btn-img"/>
                        <p className="menu-user__btn-name"> Daniel</p>
                    </button>
                </div>
                <ul className="menu-block">
                    <li className="menu-block__item">
                        <img src={search} />
                        <p>Search</p>
                    </li>
                    <li className="menu-block__item">
                        <img src={home} />
                        <p>Home</p>
                    </li>
                    <li className="menu-block__item">
                        <img src={play} />
                        <p>TV Shows</p>
                    </li>
                    <li className="menu-block__item">
                        <img src={stop} />
                        <p>Movies</p>
                    </li>
                    <li className="menu-block__item">
                        <img src={mask} />
                        <p>Genres</p>
                    </li>
                    <li className="menu-block__item">
                        <img src={time} />
                        <p>Watch Later</p>
                    </li>
                </ul>
                <div className="menu-buttons">
                    <button>Language</button>
                    <button>Get Help</button>
                    <button onClick={() => setMenuActive(false)}>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;