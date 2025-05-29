"use client";

import React from "react";
import Image from "next/image";
import { PROJECT_LIST } from "@/utils/data";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
    const params = useParams<{ id: string }>()

    const project = PROJECT_LIST.find((p) => p.id === params.id)
    console.log(project)

    return (
        <div className="w-full py-16">
            <Image
                src={String(project?.hero)}
                width={10000}
                height={10000}
                alt={String(project?.name)}
                className="w-full h-96 object-cover"
            />

            <div className="w-full h-full p-5 md:p-10">
                <h1 className="text-left text-3xl py-5">
                    {project?.name}
                </h1>

                {/* Project Details */}
                <div className="w-full grid grid-cols-1 gap-y-20 lg:grid-cols-2 py-14 justify-items-center md:space-x-10">
                    <div>
                        <span>
                            <h1 className="text-xl">[01]</h1>
                            <h2 className="text-3xl font-bold text-[#CCF96D]">
                                Brief
                            </h2>
                        </span>
                        <p className="pt-5 text-base xl:text-xl">
                            {project?.brief.text}
                        </p>
                    </div>
                    <div>
                        {project?.brief.image ?
                            <Image
                                src={String(project?.brief.image)}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-min object-cover bg-cover"
                            />
                            : null
                        }
                    </div>
                </div>

                {/* Responbilities */}
                <div className="w-full flex flex-col md:flex-row py-14 justify-items-center md:space-x-10">
                    <div className="md:w-1/2">
                        <span>
                            <h1 className="text-xl">[02]</h1>
                            <h2 className="text-3xl font-bold text-[#CCF96D]">
                                Responsibility
                            </h2>
                        </span>
                        <p className="pt-5 text-base xl:text-xl">
                            {project?.description}
                        </p>
                    </div>
                    <div className="md:w-1/2 pt-10 flex justify-center">
                        {project?.thumbnail ?
                            <Image
                                src={String(project?.thumbnail)}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-min object-cover bg-cover"
                            />
                            : null
                        }
                    </div>
                </div>

                {/* Project Results */}
                <div className="w-full flex flex-col py-14 justify-items-center">
                    <h1 className="text-xl">[03]</h1>
                    <h2 className="text-3xl font-bold text-[#CCF96D]">
                        Results & Achievement
                    </h2>
                    <p className="py-5">
                        {project?.result.text}
                    </p>
                    {project?.result.image ?
                        <Image
                            src={String(project?.result.image)}
                            width={1000}
                            height={1000}
                            alt=""
                            className="w-min object-cover bg-cover"
                        />
                        : null
                    }
                </div>
            </div>
        </div>
    );
}
