import React, {FC} from 'react';
import './StyleForMoviesListCard.css'
import {IMovieType} from "@/app/models/IMovieType";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
type Props = {
    movie:IMovieType
}
const MoviesListCard:FC<Props> = ({movie}) => {
    return (
        <div>
            <PosterPreview poster={movie.poster_path}/>

        </div>
    );
};

export default MoviesListCard;