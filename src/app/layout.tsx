// src/app/layout.tsx
import type { Metadata } from "next";
import './globals.css';
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import { apiService } from "@/app/services/api.service";

export const metadata: Metadata = {
    title: "Movies",
    description: "Select movie to watch!",
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const genres = await apiService.genres.getAll(); // Завантажуємо жанри на сервері

    return (
        <html lang="en">
        <body>
        <HeaderComponent genres={genres} /> {/* Хедер з жанрами */}
        <hr className="hrAfterHeader" />
        {children}
        </body>
        </html>
    );
}
