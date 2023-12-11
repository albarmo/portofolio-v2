import { STACK_LIST } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Marquee = () => {
    return (
        <div className="w-screen">
            <div className="relative -rotate-1 -mb-3">
                <div className="animate-marquee  whitespace-nowrap">
                    {STACK_LIST.map((stack, index) => (
                        <span key={index} className="text-sm mx-4">
                            {stack}
                        </span>
                    ))}
                    <span className="text-xs mx-4">
                        All of this is my beloved friends on software
                        development
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
            <div className="relative -rotate-1 -mt-3">
                <div className="marquee animate-marquee whitespace-nowrap ont-extralight">
                    <span className="text-xs mx-4">
                        You never change things by fighting the existing
                        reality. To change something, build a new model that
                        makes the existing model obsolete
                    </span>
                    <span className="text-xs mx-4">
                        You never change things by fighting the existing
                        reality. To change something, build a new model that
                        makes the existing model obsolete
                    </span>
                    <span className="text-xs mx-4">
                        Create with the heart; build with the mind
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
