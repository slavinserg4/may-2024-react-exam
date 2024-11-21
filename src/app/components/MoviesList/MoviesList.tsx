'use client';
import React, { FC } from 'react';
import './StyleForMoviesList.css';

import { IMovieType } from "@/app/models/IMovieType";
import Link from "next/link";
import MoviesListCard from "@/app/components/MoviesListCard/MoviesListCard";

type IProps = {
    movies: IMovieType[];
};

const MoviesList: FC<IProps> = ({ movies }) => {
    return (
        <div className="MainListDiv">
            <div className={'MainDivCards'}>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <Link className={'Link'} href={
                            {
                                pathname:'/movieinfo',
                                query:{movieId:JSON.stringify(movie.id)}
                            }
                        }>
                            <div className={'CardsOfMovies'} key={movie.id}><MoviesListCard movie={movie}/></div>
                        </Link>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default MoviesList;
