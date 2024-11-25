import React from 'react';
import './StyleForGenreBadge.css';
import { apiService } from "@/app/services/api.service";
import Link from "next/link";

interface IGenreBadgeProps {
    movieID: number;
    disableLinks?: boolean;
}

const GenreBadge = async ({ movieID, disableLinks }: IGenreBadgeProps) => {
    const genres = await apiService.getGenresForMovie.getAll(movieID);

    return (
        <div className="genre-badge-container">
            {genres.map((genre) => (
                <span key={genre.id} className="genre-badge">
                    {disableLinks ? (genre.name) : (
                        <Link className={'LinkFromBadge'} href={`/movies/genre?genre=${genre.id}&page=1`}>{genre.name}</Link>
                    )}
                </span>
            ))}
        </div>
    );
};

export default GenreBadge;
