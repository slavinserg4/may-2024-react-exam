import { IResponseMovieType } from "@/app/models/IResponseMovieType";
import { IMovieType } from "@/app/models/IMovieType";
import { IGenreType } from "@/app/models/IGenreType";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjExYzBlM2ZmZjFkZjIzMDFjMTdiNzQ1YzYyMzU5MSIsIm5iZiI6MTczMTc2OTM2MC40ODA0MTk5LCJzdWIiOiI2NzM2NGVmZTQ4ZTlkMmNmMDFhODgyMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MaLXViKk3KYCiBvNWWBu7lteq5I-7GXAvaV_SzpTCSA'
    }
};

export const apiService = {
    movie: {
        getAll: async (page: number): Promise<IResponseMovieType & { movies: IMovieType[] }> => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, options);

            if (!response.ok) {
                throw new Error('Не вдалося отримати дані');
            }

            const data = await response.json();
            return data;
        }
    },
    genres: {
        getAll: async (): Promise<IGenreType[]> => {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', options);

            if (!response.ok) {
                throw new Error('Не вдалося отримати жанри');
            }

            const data = await response.json();
            return data.genres;
        }
    },
    searchWithGenres:{
        getAll: async (key:number): Promise<IGenreType[]> => {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?with_genres=${key}`, options);

            if (!response.ok) {
                throw new Error('Не вдалося отримати жанри');
            }

            const data = await response.json();
            return data.genres;
        }
    }
};
