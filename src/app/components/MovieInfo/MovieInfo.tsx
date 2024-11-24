import React, {FC} from 'react';
import {IMovieType} from "@/app/models/IMovieType";
import './StyleForMovieInfo.css'
import GenreBadge from "@/app/components/GenreBadge/GenreBadge";
import StarRating from "@/app/components/StarRating/StarRating";
type IProps = {
    movie:IMovieType
}
const MovieInfo:FC<IProps> = ({movie}) => {
    const image = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;
    const background = 'https://image.tmdb.org/t/p/w500'+movie.backdrop_path
    return (
        <div className={'AllInfo'}>
                <img className={'BackgroundImage'} src={background} alt="Background"/>
                <img className={'Poster'} src={image} alt="Poster"/>
            <div className={'InfoAboutMovie'}>
                <div className={'backgroundForInfo'}></div>
                <h1>{movie.title}</h1>
                <GenreBadge movieID={movie.id}/>
                <p>Original title: {movie.original_title}</p>
                <p>Original language: {movie.original_language}</p>
                <p>Realise date: {movie.release_date}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>Vote average: {movie.vote_average}</p>
                <p>Vote count: {movie.vote_count}</p>
                <h3>{movie.overview}</h3>
                <StarRating/>
            </div>

        </div>
    );
};

export default MovieInfo;