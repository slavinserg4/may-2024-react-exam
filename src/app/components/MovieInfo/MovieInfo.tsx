import React, {FC} from 'react';
import {IMovieType} from "@/app/models/IMovieType";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";

type IProps = {
    movie:IMovieType
}
const MovieInfo:FC<IProps> = ({movie}) => {
    return (
        <div>
            {
                <PosterPreview poster={movie.poster_path} title={movie.title}/>
            }
        </div>
    );
};

export default MovieInfo;