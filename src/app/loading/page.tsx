"use client";
import React from "react";
import Parallax from "parallax-js";
import ProgressBar from "@/components/ProgressBar";
import ViewBoxWrapper from "@/components/Layouts/ViewBoxWrapper";
import CyberPunkText from "@/components/Effects/CyberPunkText";

const LoadingPage = () => {
    React.useEffect(() => {
        if (document) {
            const solarSystem = document.getElementById("solar-system");
            const scene2 = document.getElementById("world-map");
            const scene3 = document.getElementById("wave");

            if (solarSystem && scene2 && scene3) {
                new Parallax(solarSystem);
                new Parallax(scene2);
                new Parallax(scene3);
            }
        }
    }, []);

    return (
        <main
            className="relative h-screen overflow-hidden flex items-center justify-center z-0"
            style={{
                background: `url('/assets/chaos-grid.png')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
        >
            <ViewBoxWrapper />
            <div id="solar-system" className="absolute -left-40 -top-40">
                <img
                    data-depth="0.1"
                    src="/assets/solar-system.svg"
                    alt="Solar System"
                    className="w-2/3 pointer-events-none"
                />
            </div>
            <div id="world-map" className="absolute top-20 right-0">
                <img
                    data-depth="0.2"
                    src={"/assets/world-map.png"}
                    alt="World Map"
                    className="w-2/3 pointer-events-none"
                />
            </div>
            <div id="world-map" className="absolute top-20 right-0">
                <img
                    data-depth="0.2"
                    src={"/assets/world-map.png"}
                    alt="World Map"
                    className="w-2/3 pointer-events-none"
                />
            </div>
            <div id="wave" className="absolute bottom-20 right-20 ">
                <img
                    data-depth="0.3"
                    src={"/assets/wave.png"}
                    alt="Wave"
                    className="pointer-events-none"
                />
            </div>
            <div className="w-1/2 h-20">
                <CyberPunkText text="Albarms" duration={30} />
                <ProgressBar />
            </div>
        </main>
    );
};

export default LoadingPage;
