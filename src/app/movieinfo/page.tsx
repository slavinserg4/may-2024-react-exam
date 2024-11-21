import React from 'react';
import { apiService } from "@/app/services/api.service";

interface Props {
    searchParams: { movieId: string };
}

const MovieInfoPage = async ({ searchParams }: Props) => {
    const movieId = parseInt(searchParams.movieId, 10);
    const movie = await apiService.movieDetails.getById(movieId);


    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            {/* Інші дані про фільм */}
        </div>
    );
};

export default MovieInfoPage;
