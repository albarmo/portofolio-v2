"use client";

import React from "react";
import Image from "next/image";

const ProjectGridCanvas = () => {
    return (
        <div className="row">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((project, index) => (
                    <Image
                        className="block"
                        key={index}
                        src="/images/project-one.jpg"
                        alt={"Project Name"}
                        width={400}
                        height={400}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGridCanvas;
