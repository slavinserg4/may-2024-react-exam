import React from 'react';
import { apiService } from "@/app/services/api.service";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import Pagination from "@/app/components/Pagination/Pagination";

interface Props {
    searchParams: { page: string };
}

const HomePage = async ({ searchParams }: Props) => {
    const page = parseInt(searchParams.page || '1', 10);

    const data = await apiService.movieWithPage.getAll(page);

    return (
        <div className={'HomeMainDiv'}>
            <p>All Movies: Choose your favorite</p>
            <MoviesList movies={data.results} />

            <Pagination currentPage={page} queryParams={{}} basePath="/" />
        </div>
    );
};

export default HomePage;
