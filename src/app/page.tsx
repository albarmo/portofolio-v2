import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex w-ful justify-center items-center space-x-5 tracking-widest">
                <h1 className="text-right text-2xl font-extralight text-[#606061]">
                    <span>
                        ALBAR MOERHAMSA <br />
                    </span>
                    <span>
                        JAKARTA 12430 <br />
                    </span>
                    <a className="word fancy">
                        SOFTWARE ENGINEER <br />
                    </a>
                    <span>
                        +62 812 8070 9980 <br />
                    </span>
                    <span>-RESUME -GITHUB</span>
                </h1>
                <Image
                    src="/assets/proportion-grid.svg"
                    alt="Proportion Grid"
                    width={220}
                    height={100}
                />
            </div>
        </main>
    );
}
