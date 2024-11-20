import { IResponseMovieType } from "@/app/models/IResponseMovieType";
import { IMovieType } from "@/app/models/IMovieType";
import { IGenreType } from "@/app/models/IGenreType";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjExYzBlM2ZmZjFkZjIzMDFjMTdiNzQ1YzYyMzU5MSIsIm5iZiI6MTczMjEwOTE5Ni41OTMyMDE5LCJzdWIiOiI2NzM2NGVmZTQ4ZTlkMmNmMDFhODgyMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qrfxIg4kDGw2rZSdBiY2j9Dz_cAQ8dfABbLrfGYgb1Q'
    }
};

export const apiService = {
    movieWithPage: {
        getAll: async (page: number): Promise<IResponseMovieType & { movies: IMovieType[] }> => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, options);
            if (!response.ok) throw new Error('Не вдалося отримати фільми за жанром');
            const data = await response.json();
            return data;
        }
    },
    genres: {
        getAll: async (): Promise<IGenreType[]> => {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', options);
            if (!response.ok) throw new Error('Не вдалося отримати жанри');
            const data = await response.json();
            return data.genres;
        }
    },
    searchMovies: {
        getAll: async (query: string, page: number): Promise<IResponseMovieType & { movies: IMovieType[] }> => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?page=${page}&query=${encodeURIComponent(query)}`,
                options
            );
            if (!response.ok) throw new Error('Не вдалося знайти фільми');
            const data = await response.json();
            return data;
        }
    },
    searchWithGenres: {
        getAll: async (genreId: number, page: number): Promise<IResponseMovieType & { movies: IMovieType[] }> => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genreId}`, options);

            if (!response.ok) {
                throw new Error('Не вдалося отримати фільми за жанром');
            }

            const data = await response.json();
            return data;
        }
    }
};