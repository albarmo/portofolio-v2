import { STACK_LIST } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Marquee = () => {
    return (
        <div className="w-screen">
            <div className="relative -rotate-1 -mb-2">
                <div className="animate-marquee  whitespace-nowrap">
                    {STACK_LIST.map((stack, index) => (
                        <span key={index} className="text-sm mx-4">
                            {stack}
                        </span>
                    ))}
                    <span className="text-xs mx-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius voluptatibus quasi dicta veniam non odit itaque
                        possimus assumenda maiores reprehenderit facere, ipsa
                        exercitationem tempora ab, ratione consectetur,
                        reiciendis voluptatum impedit.
                    </span>
                </div>
            </div>
            <Image
                src="/assets/ruler.svg"
                alt="Ruler"
                className="w-full h-10 md:h-auto"
                width={10}
                height={10}
            />
            <div className="relative -rotate-1 -mt-4">
                <div className="marquee animate-marquee whitespace-nowrap ont-extralight">
                    <span className="text-xs mx-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius voluptatibus quasi dicta veniam non odit itaque
                        possimus assumenda maiores reprehenderit facere, ipsa
                        exercitationem tempora ab, ratione consectetur,
                        reiciendis voluptatum impedit.
                    </span>
                    <span className="text-xs mx-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius voluptatibus quasi dicta veniam non odit itaque
                        possimus assumenda maiores reprehenderit facere, ipsa
                        exercitationem tempora ab, ratione consectetur,
                        reiciendis voluptatum impedit.
                    </span>
                    <span className="text-xs mx-4">Marquee Item 2</span>
                    <span className="text-xs mx-4">Marquee Item 3</span>
                    <span className="text-xs mx-4">Marquee Item 4</span>
                    <span className="text-xs mx-4">Marquee Item 5</span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
