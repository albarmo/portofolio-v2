import { STACK_LIST } from "@/utils/data";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex h-screen w-auto flex-col-reverse md:flex-row justify-center items-center md:space-x-5 tracking-widest">
                <h1 className="w-full text-center md:text-right text-xl md:text-2xl font-extralight text-[#606061]">
                    <span>
                        ALBAR MOERHAMSA <br />
                    </span>
                    <span className="text-justify">
                        JAKARTA 12430 <br />
                    </span>
                    <a className="word fancy">
                        SOFTWARE ENGINEER <br />
                    </a>
                    <span>
                        +62 812 8070 9980 <br />
                    </span>
                    <span>-RESUME</span>
                    <span>- GITHUB</span>
                </h1>
                <Image
                    src="/assets/proportion-grid.svg"
                    alt="Proportion Grid"
                    width={220}
                    height={100}
                    className="w-full md:w-auto mb-5 md:mb-0"
                />
            </div>
            <div className="w-screen">
                <div className="relative -rotate-1 -mb-2">
                    <div className="marquee whitespace-nowrap">
                        {STACK_LIST.map((stack, index) => (
                            <span key={index} className="text-sm mx-4">
                                {stack}
                            </span>
                        ))}
                        <span className="text-xs mx-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius voluptatibus quasi dicta veniam non odit
                            itaque possimus assumenda maiores reprehenderit
                            facere, ipsa exercitationem tempora ab, ratione
                            consectetur, reiciendis voluptatum impedit.
                        </span>
                    </div>
                </div>
                <Image
                    src="/assets/ruler.svg"
                    alt="Ruler"
                    width={1200}
                    height={50}
                    className="w-full h-10 md:h-auto"
                />
                <div className="relative -rotate-1 -mt-4">
                    <div className="marquee animate-marquee whitespace-nowrap ont-extralight">
                        <span className="text-xs mx-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius voluptatibus quasi dicta veniam non odit
                            itaque possimus assumenda maiores reprehenderit
                            facere, ipsa exercitationem tempora ab, ratione
                            consectetur, reiciendis voluptatum impedit.
                        </span>
                        <span className="text-xs mx-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius voluptatibus quasi dicta veniam non odit
                            itaque possimus assumenda maiores reprehenderit
                            facere, ipsa exercitationem tempora ab, ratione
                            consectetur, reiciendis voluptatum impedit.
                        </span>
                        <span className="text-xs mx-4">Marquee Item 2</span>
                        <span className="text-xs mx-4">Marquee Item 3</span>
                        <span className="text-xs mx-4">Marquee Item 4</span>
                        <span className="text-xs mx-4">Marquee Item 5</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
