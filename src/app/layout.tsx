import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";

export const metadata: Metadata = {
  title: "Movies",
  description: "Select movie to watch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <HeaderComponent/>
      <hr className={'hrAfterHeader'}/>
        {children}
      </body>
    </html>
  );
}
