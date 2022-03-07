/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Item.scss';


import img3 from './https_specials-3.png'



const Item = ({name, url }) => {
    return (
        <div className="item">
            <button className="item-btn">
                <img src={img3}></img>    
            </button>
        </div>
    )
}

export default Item;