"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PROJECT_LIST } from "@/utils/data";

const ProjectGridCanvas = () => {
    const router = useRouter();
    return (
        <div className="row">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {PROJECT_LIST.map((project, index) => (
                    <Image
                        className="block"
                        key={index}
                        src={project.image}
                        alt={"Project Name"}
                        width={400}
                        height={400}
                        onClick={() => router.push(`/detail/P${project.id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGridCanvas;
