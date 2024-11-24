import React from 'react';
import { apiService } from "@/app/services/api.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import Pagination from "@/app/components/Pagination/Pagination";

interface Props {
    searchParams: { genre: string, page: string };
}

const GenreMoviesPage = async ({ searchParams }: Props) => {
    const genreId = parseInt(searchParams.genre, 10);
    const page = parseInt(searchParams.page || '1', 10);

    const data = await apiService.searchWithGenres.getAll(genreId, page);

    return (
        <div className={'HomeMainDiv'}>
            <MoviesList movies={data.results} />

            <Pagination
                currentPage={page}
                queryParams={{ genre: genreId.toString() }}
                basePath="/movies/genre"
            />
        </div>
    );
};

export default GenreMoviesPage;
