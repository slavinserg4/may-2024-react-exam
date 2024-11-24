import React from 'react';
import { apiService } from "@/app/services/api.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import Pagination from "@/app/components/Pagination/Pagination";

interface Props {
    searchParams: { query: string, page: string };
}

const SearchMoviesPage = async ({ searchParams }: Props) => {
    const searchQuery = searchParams.query;
    const page = parseInt(searchParams.page || '1', 10);

    const data = await apiService.searchMovies.getAll(searchQuery, page);

    return (
        <div className={'HomeMainDiv'}>
            <h3>At your request {searchQuery}</h3>
            <MoviesList movies={data.results} />

            <Pagination
                currentPage={page}
                queryParams={{ query: searchQuery }}
                basePath="/movies/search"
            />
        </div>
    );
};

export default SearchMoviesPage;
