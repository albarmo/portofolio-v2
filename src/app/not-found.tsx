import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className="my-5 text-[#CCF96D]">
                Return Home
            </Link>
        </main>
    );
}
