"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import CircleText from "@/components/Effects/CircleText";
import Marquee from "@/components/Marquee";
import Modal from "@/components/Modal";
import useModalDisclosure from "@/hooks/useModalDisclosure";
import { PROJECT_LIST } from "@/utils/data";
import Experience from "@/components/Experience";
import { ARTICLE_LIST } from "@/utils/sampled-html";
import { COMPONENT_LIST } from "@/utils/hwtd";
import Lanyard from "@/components/Model/Lanyard";

export default function Home() {
    const router = useRouter();
    const [projectData, setProjectData] = useState<any>();
    const { isOpen, open, close } = useModalDisclosure();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
            <Modal
                title={"Project Detail"}
                size="md"
                isOpen={isOpen}
                close={close}
            >
                <div className="container-modal h-[500px] text-white overflow-y-scroll">
                    <Image
                        className="block w-full"
                        src={projectData?.image}
                        alt={projectData?.title}
                        width={400}
                        height={400}
                    />
                    <h1 className="my-5 text-xl font-semibold">
                        {projectData?.title || "Loading Title.."}
                    </h1>
                    <div
                        className="spaceMono font-base text-sm"
                        dangerouslySetInnerHTML={{
                            __html: projectData?.description || <></>,
                        }}
                    />
                </div>
            </Modal>
            <div className="bg-red-100 fixed left-0 bottom-0">
                <CircleText />
            </div>
            {/* HERO */}
            <div
                id="beranda"
                className="h-min"
            >
                <div className="flex flex-col h-min pt-36 space-y-5 w-auto md:flex-col justify-center items-center">
                    <p>Front-end . Software Engineer . Back-End</p>
                    <h1 className="text-[60px] leading-[50px] md:text-[90px] font-black uppercase md:leading-[75px] text-center" >intuitive<span className="text-[#CCF96D]"> and <br />visually</span> user <br /> experiences</h1>
                    <p className="w-2/3 text-center">I craft intuitive and visually stunning web interfaces that blend creativity with functionality, delivering seamless user experiences that bring ideas to life.</p>
                </div>
            </div>
            <div className="w-screen h-[600px]">
                <Lanyard />
            </div>
            <Marquee />
            {/* PROJECTS */}
            <div id="projects" className="w-full h-full my-20 p-5 md:px-32">
                <h2 className="text-4xl uppercase my-5">
                    Work<span className="font-semibold text-[#CCF96D] italic">Space</span>
                </h2>
                <div className="row">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-0">
                        {PROJECT_LIST.map((project, index) => (
                            <div className="relative" key={index}>
                                <div className="h-60 bg-[#CCF96D] rounded-lg" />
                                <article
                                    className="group absolute right-2 bottom-1 h-60 w-full rounded-lg border border-[#76F96D] cursor-pointer"
                                    style={{
                                        background: `url(${project.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <section className="invisible group-hover:visible flex-col justify-between w-full h-full">
                                        <section className="w-full p-0">
                                            <div className="bg-[#CCF96D] px-1 rounded-sm text-sm text-green-700">
                                                <h1 className="uppercase text-lg font-bold text-black">
                                                    Interactive static Housing map
                                                </h1>
                                            </div>
                                            <span className="bg-[#CCF96D] px-1 rounded-sm text-sm text-green-700">Web Application</span>
                                        </section>
                                    </section>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* HOW TO DO THIS */}
            <div id="hwtd" className="w-full h-full md:mt-20 p-5 md:p-32">
                <h2 className="text-xl">
                    All Things Began With <br />
                    <span className="font-bold">How To Do This?!</span>
                </h2>
                <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-10 p-0">
                    {COMPONENT_LIST.map((comp, index) => (
                        <article
                            key={index}
                            className="p-4 md:p-4 border border-[#232323] rounded dark-gradient overflow-hidden cursor-pointer"
                            onClick={() => router.push(`/detail/component/${comp?.id}`)}
                            onKeyUp={() => console.log("first")}
                        >
                            <h1 className="text-sm md:text-md">
                                {comp?.id}
                            </h1>
                            {comp?.component}
                            <p>{comp?.title}</p>
                        </article>
                    ))}
                </section>
            </div>
            <div id="experience" className="w-full h-full p-0 md:p-32">
                <Experience />
            </div>
            {/* THE CONCEPTS md:mt-0 p-5 md:p-32 md:pt-0 */}
            <div id="concepts" className="w-full h-full mt-10 md:px-20">
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
                    {ARTICLE_LIST.map((article, index) => (
                        <article
                            key={index}
                            className="p-3 md:p-4 border border-[#232323] border-dashed rounded dark-gradient overflow-hidden cursor-pointer"
                            onClick={() => router.push(`/detail/article/${article.id}`)}
                            onKeyUp={() => console.log("first")}
                        >
                            <h1 className="text-md font-semibold md:text-md">
                                {article?.title}
                            </h1>
                            <p className="text-sm font-light">
                                {article?.description}
                            </p>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
