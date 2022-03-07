/* eslint-disable jsx-a11y/alt-text */
import React, {useState , useCallback  } from "react";
import './Movie.scss';

import movieName from './FeaturedTitleImage.png';
import { Context } from "../../../App";

const Movie = () => {
    
    const [play, setPlay] = useState(false);
    const [randomMovie , setRandomMovie] = useState(0);
    const value = React.useContext(Context);

    
    const playVideo = useCallback(
        () => {
            setPlay(true)
        },[],
    );

    const colseVideo = useCallback(
        () => {
            setPlay(false)
        },[],
    );
        
    setTimeout(() => {
        setRandomMovie(Math.floor(Math.random() * value.length))
    },20000)

    return (
        <div>
            {
                randomMovie === 0
                ?
                <div className="movie">
                <p className="movie-title">Category</p>
                <img src={movieName} className="movie-img">
                    
                </img>
                <div className={play ? "movie-video active" : "movie-video"}>
                    <div className="movie-video__block">
                        <video className="video" controls  >
                            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
                        </video>
                        <button className="close" onClick={colseVideo}>X</button>
                    </div>
                </div>
                <div className="movie-data">
                    <p className="movie-data__year">ReleaseYear</p>
                    <p className="movie-data__user-year">MpaRating</p>
                    <p className="movie-data__time">1h 48m</p>
                </div>
                <p className="movie-desc">
                    It is a long established fact that 
                    a reader will be distracted by the 
                    readable content of a page when looking 
                    at its layout. The point of using Lorem 
                    Ipsum is that it has a more-or-less normal 
                    distribution of letters, as opposed to using 
                    'Content here, content here', making it look 
                    like readable English.
                </p>
                <div className="movie-buttons">
                    <button className="movie-buttons__play" onClick={playVideo}>Play</button>
                    <button className="movie-buttons__more">More Info</button>
                </div>
                </div>
                :
                value.map((elem,index ) => (
                <React.Fragment  key={index}>
                    {
                    elem.Id == randomMovie
                    ?
                    <div className="movie active">
                        <p className="movie-title">{elem.Category}</p>
                        <p className="movie-name">{elem.Title}</p>
                        <div className={play ? "movie-video active" : "movie-video"}>
                            <div className="movie-video__block">
                                <video className="video" controls  >
                                    <source src={elem.VideoUrl}/>
                                </video>
                                <button className="close" onClick={colseVideo}>X</button>
                            </div>
                        </div>
                        <div className="movie-data">
                            <p className="movie-data__year">{elem.ReleaseYear}</p>
                            <p className="movie-data__user-year">{elem.MpaRating}</p>
                            <p className="movie-data__time">{elem.Duration}</p>
                        </div>
                        <p className="movie-desc">
                            {elem.Description}
                        </p>
                        <div className="movie-buttons">
                            <button className="movie-buttons__play" onClick={playVideo}>Play</button>
                            <button className="movie-buttons__more">More Info</button>
                        </div>
                    </div>
                    :
                    <p></p>
                    }
                </React.Fragment> 
                ))
            }                 
        </div>
    )
}

export default Movie;