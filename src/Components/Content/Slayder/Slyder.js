/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Slyder.scss';
import Item from "./Item/Item";
import { Context } from "../../../App";

const Slayder = () => {

    const value = React.useContext(Context);
    
    return (
        <div className="slyder">
            <p className="slyder-title"></p>
            <div className="slyder-block">
                <ul className="slyder-block__bar">
                    {
                        value.map((item ,index) => (
                        <div key={index}>
                        {
                        item.Id <= 8
                        ?
                            <li className="slyder-block__bar-item" key={index}>
                                <Item   
                                    id={item.Id} name={item.Title} url={item.CoverImage }/>
                            </li>
                        :
                        <p></p>
                        }
                        </div>
                        ))   
                    }                
                </ul>
            </div>
        </div>
    )
}

export default Slayder;