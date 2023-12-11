"use client";
import React, { useEffect, useState } from "react";
import CyberPunkText from "@/components/Effects/CyberPunkText";
import Image from "next/image";
import useModalDisclosure from "@/hooks/useModalDisclosure";
import Drawer from "./Drawer";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter();
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
            <button
                id="navbar-logo"
                className="flex items-center h-full text-center px-4 z-[101] logo-glitch cursor-pointer"
                onClick={() => router.push("/")}
            >
                <CyberPunkText text="albarms" duration={30} />
            </button>
            <nav
                id="navbar-action"
                className="flex items-center justify-center h-full"
            >
                <ul className="hidden md:flex items-center justify-center space-x-10 px-10 h-full">
                    <Link href={"https://github.com/albarmo"} target="_blank">
                        Github
                    </Link>
                    <Link
                        href={
                            "https://www.linkedin.com/in/albar-moerhamsa-aa21681bb"
                        }
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href={"/resume/Albar_Moerhamsa.pdf"}
                        target="_blank"
                        download
                    >
                        Resume
                    </Link>
                </ul>
                <div
                    id="navbar-action"
                    className=" flex items-center h-full text-center px-4 py-2"
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
