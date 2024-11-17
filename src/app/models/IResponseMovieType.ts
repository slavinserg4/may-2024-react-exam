import {IMovieType} from "@/app/models/IMovieType";

export interface IResponseMovieType{
    page: number;
    results: IMovieType[];
    total_pages: number;
    total_results: number;
}