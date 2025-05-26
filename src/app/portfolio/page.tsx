import { PROJECT_LIST } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
const POINTS = [
    {
        title: "Two-way synchronization",
        description:
            "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
        title: "Private tasks",
        description:
            "Integration and management of multiple data repositories effectively.",
    },
    {
        title: "Fast Development",
        description:
            "Integration and management of multiple data repositories effectively.",
    },
];


export default function WorksPage() {
    return (
        <main className="bg-[#030A17] text-white h-full w-lvw overflow-hidden">
            {/* Hero Section */}
            <div className="cta-gradient-l py-20 space-y-5 overflow-hidden">
                <section className="flex flex-col-reverse md:flex-row justify-between md:space-x-20  items-center p-5 md:p-24">
                    <section className="space-y-3 w-full">
                        <h1 className="text-6xl md:text-7xl font-bold mt-20 md:mt-0">
                            Portfolio
                        </h1>
                        <p className="text-lg leading-6 pb-5">
                            Signifies fast, reliable, and high-quality software
                            delivery with precision and efficiency. 🚀
                        </p>
                    </section>
                </section>
            </div>

            {/* Features */}
            <div className="flex md:hidden justify-between items-start flex-col md:flex-row overflow-hidden p-5 bg-black">
                <section className="grid grid-cols-2 gap-x-10 md:gap-x-40">
                    {POINTS?.map((feature) => (
                        <article
                            key={feature.title}
                            className="first:col-span-2 nth-[1]:w-full first:w-full first:h-32 h-40 rounded-lg aspect-square space-y-1.5"
                        >
                            <h2 className="text-white text-xl font-bold">
                                {feature.title}
                            </h2>
                            <p className="text-white text-xs">
                                From development to deployment, we ensure
                                efficiency, scalability, and excellence in every
                                project
                            </p>
                        </article>
                    ))}
                </section>
            </div>

            {/* PROJECTS */}
            <div id="projects" className="w-full h-full my-10 px-5 md:px-10">
                <h2 className="text-4xl uppercase my-20">
                    Project<span className="font-semibold text-[#CCF96D] italic">Showcase</span>
                </h2>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 md:gap-y-16 w-full p-0">
                    {PROJECT_LIST?.map((project) => (
                        <article
                            key={project.title}
                            className="group shadow-xl cursor-pointer w-full h-80 transition-all duration-500 transform-gpu delay-75 rounded-lg bg-[url('/images/cover/bg-green-4.png')] bg-cover bg-center"
                        >
                            <section className="relative w-full h-full bg-gradient-to-b from-transparent to-black hover:to-black flex justify-center items-start">
                                <Link href={`/portfolio/${project.id}`}>
                                    <Image
                                        src={project.image}
                                        alt="Localoka"
                                        width={220}
                                        height={30}
                                        className="grayscale w-full opacity-50 group-hover:opacity-95 group-hover:-translate-y-1/4 group-hover:border-2 rounded-md group-hover:w-96 object-contain bg-white shadow-2xl group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <section className="absolute bottom-0 left-0 h-32 space-x-1.5 p-5 w-full bg-gradient-to-b from-transparent to-transparent group-hover:to-black">
                                        <h3 className="font-bold">
                                            {project.title}
                                        </h3>
                                        <section className="md:h-0 md:w-0 p-1 group-hover:w-full transition-all duration-500 transform-gpu delay-50">
                                            <p className="text-white text-xs line-clamp-2">
                                                {project.description}
                                            </p>
                                        </section>
                                    </section>
                                </Link>
                            </section>
                        </article>
                    ))}
                </section>
            </div>

            <div className="relative overflow-hidden border-t-[0.2px] border-white/5 w-lvw h-full min-h-96 flex justify-center items-center">
                <section className="space-y-5 text-center p-10 md:px-24 z-10 md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Let us get to know your fresh start?
                    </h2>
                    <p>
                        Let’s talk business. With our free consultation service,
                        your new digital adventure is just an email away. So,
                        what are you waiting for ?
                    </p>
                    <button className="card-wrapper w-full h-14 md:h-11 md:w-40 rounded-lg cursor-pointer">
                        <p className="card-content rounded-lg bg-gradient-to-r from-black/90 to-slate-900/80">
                            Get In Touch
                        </p>
                    </button>
                </section>
                <section className="cta-gradient-r absolute right-0 top-0 h-full w-full animate-pulse"></section>
            </div>
        </main>
    );
}
