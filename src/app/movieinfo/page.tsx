import React from 'react';
import { apiService } from "@/app/services/api.service";
import MovieInfo from "@/app/components/MovieInfo/MovieInfo";

interface Props {
    searchParams: { movieId: string };
}

const MovieInfoPage = async ({ searchParams }: Props) => {
    const movieId = parseInt(searchParams.movieId, 10);
    const movie = await apiService.movieDetails.getById(movieId);


    return (
        <div>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MovieInfoPage;
