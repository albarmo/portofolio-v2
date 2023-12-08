"use client";
import React, { useEffect, useState } from "react";
import CyberPunkText from "@/components/Effects/CyberPunkText";
import Image from "next/image";
import useModalDisclosure from "@/hooks/useModalDisclosure";
import Drawer from "./Drawer";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const { isOpen, open, close } = useModalDisclosure();

    const [currentSection, setCurrentSection] = useState<string>("/");
    console.log(currentSection, isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest("#drawer-navigation")) {
            close();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    if (pathname === "/loading") {
        return <></>;
    }

    return (
        <header className="fixed w-full h-14 bg--100 flex justify-between items-center z-[101]">
            <Drawer
                isOpen={isOpen}
                close={close}
                active={""}
                setCurrentSection={setCurrentSection}
            />
            <svg
                className="absolute top-14 left-0 w-full"
                height="1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="-4.37114e-08"
                    y1="0.500122"
                    x2="1440"
                    y2="0.499996"
                    stroke="#272727"
                />
            </svg>
            <h1
                id="navbar-logo"
                className="flex items-center h-full text-center px-4 z-[101]"
            >
                <CyberPunkText text="albarms" duration={30} />
            </h1>
            <nav
                id="navbar-action"
                className="flex items-center justify-center h-full"
            >
                <ul className="hidden md:flex items-center justify-center space-x-10 px-10 h-full">
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <li>Resume</li>
                </ul>
                <div
                    id="navbar-action"
                    className="flex items-center h-full text-center px-4 py-2"
                >
                    <Image
                        src={"/assets/menu-dot.svg"}
                        alt="Menu"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                        onClick={() => open()}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;