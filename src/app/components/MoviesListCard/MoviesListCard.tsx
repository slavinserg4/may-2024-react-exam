import React, {FC} from 'react';
import './StyleForMoviesListCard.css'
import {IMovieType} from "@/app/models/IMovieType";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
type Props = {
    movie:IMovieType
}
const MoviesListCard:FC<Props> = ({movie}) => {
    console.log(movie.poster_path)
    return (
        <div className={'Card'}>
            <PosterPreview poster={movie.poster_path} title={movie.title}/>
            <p>{movie.title}</p>
        </div>
    );
};

export default MoviesListCard;