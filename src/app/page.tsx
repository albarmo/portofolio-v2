import CircleText from "@/components/Effects/CircleText";
import Marquee from "@/components/Marquee";
import ProjectGridCanvas from "@/components/ProjectGridCanvas";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
            <div className="bg-red-100 fixed left-0 bottom-0">
                <CircleText />
            </div>
            <div className="glitch tv-warp h-screen flex justify-center items-center p-10">
                <div className="flex h-min w-auto flex-col-reverse md:flex-row justify-center items-center md:space-x-5 tracking-widest">
                    <div className="w-full text-center md:text-right text-xl md:text-2xl font-light text-white">
                        <span>
                            <h2
                                className="hero glitch layers uppercase"
                                data-text="ELANG"
                            >
                                <span>Albarms</span>
                            </h2>
                            <br />
                        </span>
                        <span className="text-justify">
                            JAKARTA 12430 <br />
                        </span>
                        <h2
                            className="hero glitch layers uppercase"
                            data-text="LEARNER"
                        >
                            WEB DEVELOPER <br />
                        </h2>
                        <br />
                        <span>
                            +62 812 8070 9980 <br />
                        </span>
                        <span>-RESUME</span>
                        <span>- GITHUB</span>
                    </div>
                    <Image
                        src="/assets/proportion-grid.svg"
                        alt="Proportion Grid"
                        width={220}
                        height={100}
                        className="w-full md:w-auto mb-5 md:mb-0"
                    />
                </div>
            </div>
            <Marquee />
            {/* PROJECTS */}
            <div className="w-full h-full my-20 p-5 md:p-32">
                <ProjectGridCanvas />
            </div>
            {/* HOW TO DO THIS */}
            <div className="w-full h-full mt-20 p-5 md:p-32">
                <h2 className="text-xl">
                    All Things Began With <br />
                    <span className="font-bold">How To Do This?!</span>
                </h2>
                <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <article
                            key={index}
                            className="p-4 md:p-4 border border-[#232323] rounded dark-gradient overflow-hidden cursor-pointer"
                        >
                            <h1 className="text-sm md:text-md">
                                COMPONENT_0{index + 1}
                            </h1>
                        </article>
                    ))}
                </section>
            </div>
            {/* THE CONCEPTS md:mt-0 p-5 md:p-32 md:pt-0 */}
            <div className="w-full h-full mt-10 md:px-20">
                <div className="w-full flex top-border">
                    <section className="right-border p-4 md:w-32"></section>
                    <section className="bottom-border right-border p-4 w-[320px] -ml-8">
                        <h2 className="text-xl w-96 md:w-full px-8">
                            THE CONCEPTS
                        </h2>
                    </section>
                    <section className="relative bottom-border p-4 w-full">
                        <svg
                            width="72"
                            height="72"
                            viewBox="0 0 98 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -left-9 -top-9"
                        >
                            <circle
                                cx="49"
                                cy="49"
                                r="48.5"
                                stroke="#232323"
                                stroke-dasharray="2 2"
                            />
                        </svg>
                    </section>
                </div>
                <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-10 p-10 md:px-32">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <article
                            key={index}
                            className="p-3 md:p-4 border border-[#232323] border-dashed rounded dark-gradient overflow-hidden cursor-pointer"
                        >
                            <h1 className="text-md font-semibold md:text-md">
                                Built-in Optimizations
                            </h1>
                            <p className="text-sm font-light">
                                Make your React component async and await your
                                data. Next.js supports both server and client
                                data fetching.
                            </p>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
