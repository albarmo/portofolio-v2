import type { Metadata, Viewport } from "next";
import { Space_Mono, Saira } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Layouts/navigation/Navbar";
import Footer from "@/components/Layouts/navigation/Footer";
import Head from "next/head";
import GSAPSmootherProvider from "@/registry/GSAPSmoother";

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
    title: "ALBARMS | Homepage",
    description: "Albar Moerhamsa Portfolio V2",
    icons: {
        icon: '/favicon.ico', // path relative to the public folder
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${saira.variable} ${spaceMono.variable} overflow-x-hidden`}
            >
                <Navbar />
                <GSAPSmootherProvider>
                    {children}
                    <Footer />
                </GSAPSmootherProvider>
            </body>
        </html>
    );
}
