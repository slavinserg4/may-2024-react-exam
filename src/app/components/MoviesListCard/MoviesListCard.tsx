import React, {FC} from 'react';
import './StyleForMoviesListCard.css'
import {IMovieType} from "@/app/models/IMovieType";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import GenreBadge from "@/app/components/GenreBadge/GenreBadge";
type Props = {
    movie:IMovieType
}
const MoviesListCard:FC<Props> = ({movie}) => {
    console.log(movie.poster_path)
    return (
        <div className={'Card'}>
            <PosterPreview poster={movie.poster_path} title={movie.title}/>
            <p>{movie.title}</p>
            <GenreBadge movieID={movie.id} disableLinks={true}/>
        </div>
    );
};

export default MoviesListCard;