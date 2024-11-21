import React, {FC} from 'react';
import './StyleForPosterPreview.css'

type IProps = {
    poster:string
    title:string
}
const PosterPreview:FC<IProps> = ({poster,title}) => {
    const imageBaseURL ='https://image.tmdb.org/t/p/w300'
    return (
        <div>
            <img className={'image'} src={`${imageBaseURL}${poster}`} alt={title}/>
        </div>
    );
};

export default PosterPreview;