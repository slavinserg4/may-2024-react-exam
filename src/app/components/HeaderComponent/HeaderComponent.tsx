'use client';
import './StyleForHeader.css';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IGenreType } from "@/app/models/IGenreType";
import Link from "next/link";
import UserInfo from "@/app/components/UserInfo/UserInfo";

interface HeaderProps {
    genres: IGenreType[] | undefined;  // Пропс для жанрів
}

const HeaderComponent: React.FC<HeaderProps> = ({ genres }) => {
    const router = useRouter();

    // Обробка пошуку
    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const searchQuery = formData.get('search')?.toString().trim();

        if (searchQuery) {
            router.push(`/movies/search?query=${encodeURIComponent(searchQuery)}&page=1`);
        }
    };

    // Обробка вибору жанру
    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genreId = event.target.value;

        if (genreId) {
            router.push(`/movies/genre?genre=${genreId}&page=1`);
        }
    };

    return (
        <div className="MainDivHeader">
            <div className={'Header'}>
                <img className={'NImage'} src="/netflix-logo.png" alt="NetflixLogo"/>
                <div className={'LinkToMain'}>
                    <Link className={'link'} href={'/'}>All Movies</Link>
                </div>
                    <div className="divForSelect">
                            <select name="Genres" id="searchGenres" className={'Select'} onChange={handleGenreChange}>
                                <option value="">Search by genre</option>
                                {genres?.map((genre) => (
                                    <option key={genre.id} value={genre.id}>
                                       {genre.name}
                                    </option>
                                ))}
                            </select>
                    </div>
                    <form className="formForSearch" onSubmit={handleSearch}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Search your interesting..."
                            name="search"
                        />
                        <button type="submit">Submit</button>
                    </form>
                    <UserInfo/>

            </div>
        </div>
    );
};

export default HeaderComponent;
