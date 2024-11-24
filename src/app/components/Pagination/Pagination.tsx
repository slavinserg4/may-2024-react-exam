import React from 'react';
import Link from 'next/link';
import './StylePagination.css'
interface PaginationProps {
    currentPage: number;
    queryParams: { [key: string]: string };
    basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, queryParams, basePath }) => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage = currentPage + 1;

    const generateLink = (page: number) => {
        const params = new URLSearchParams({ ...queryParams, page: page.toString() }).toString();
        return `${basePath}?${params}`;
    };

    return (
        <div className={'ButtonsDiv'}>
    {currentPage > 1 && (
        <Link href={generateLink(prevPage)}>
            <button className={'button-62'}>Prev</button>
            </Link>
    )}

    <Link href={generateLink(nextPage)}>
        <button  className={'button-62'}>Next</button>
        </Link>
        </div>
);
};

export default Pagination;
