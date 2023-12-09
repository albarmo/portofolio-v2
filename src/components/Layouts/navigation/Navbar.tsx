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
        <header
            id="navbar-bottom"
            className="fixed w-full h-14 bg--100 flex justify-between items-center z-[101] bg-[#0A0A0B]"
        >
            <Drawer
                isOpen={isOpen}
                close={close}
                active={""}
                setCurrentSection={setCurrentSection}
            />
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
