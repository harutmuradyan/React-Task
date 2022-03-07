import React from "react";
import './Content.scss';
import Movie from "./Movie/Movie";
import Slayder from "./Slayder/Slyder";

const Content = ({menuActive ,movie }) => {
    return (
        <div className={menuActive ? "content width" : "content"}>
            <Movie  movie={movie}/>
            <Slayder/>
        </div>
    )
}

export default Content;