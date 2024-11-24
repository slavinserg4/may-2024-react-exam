import React, { FC } from 'react';
import './StyleForGenreBadge.css';
import {apiService} from "@/app/services/api.service";

interface IGenreBadgeProps {
    movieID:number
}
const GenreBadge: FC<IGenreBadgeProps> = async ({ movieID }) => {
    const genres = await apiService.getGenresForMovie.getAll(movieID);
    return (
        <div className="genre-badge-container">
            {
                genres.map((genre) => (<span key={genre.id} className="genre-badge">{genre.name}</span>) )
            }
        </div>
    );
};

export default GenreBadge;
