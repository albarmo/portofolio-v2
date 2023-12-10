import type { Metadata } from "next";
import { Space_Mono, Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layouts/navigation/Navbar";
import Footer from "@/components/Layouts/navigation/Footer";

const saira = Saira({
    subsets: ["latin"],
    variable: "--font-saira",
});
const spaceMono = Space_Mono({
    subsets: ["latin"],
    variable: "--font-spaceMono",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Albarms",
    description: "Albar Moerhamsa Portofolio V2",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${saira.variable} ${spaceMono.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
