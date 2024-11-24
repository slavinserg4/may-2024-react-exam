import React from 'react';
import { apiService } from "@/app/services/api.service";
import MovieInfo from "@/app/components/MovieInfo/MovieInfo";
import Link from "next/link";

interface Props {
    searchParams: { movieId: string };
}

const MovieInfoPage = async ({ searchParams }: Props) => {
    const movieId = parseInt(searchParams.movieId, 10);
    const movie = await apiService.movieDetails.getById(movieId);


    return (
        <div className={'MainMovieInfoPage'}>
            <Link className={'LinkBack'} href={'/'}><img className={'ButtonBack'} src="/icons8-back-50.png" alt="Back"/></Link>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MovieInfoPage;
