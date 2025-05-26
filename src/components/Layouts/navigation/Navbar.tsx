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
            className="fixed w-full h-16 flex justify-between items-center z-[101] bg-[#0A0A0B]/90 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <Drawer
                isOpen={isOpen}
                close={close}
                setCurrentSection={setCurrentSection}
            />
            <Link href='/' className="flex justify-start items-center h-10 px-3.5">
                <Image src='/images/logo.gif' alt="Albarms Workspace" className="h-10 cursor-pointer object-contain" width={50} height={50} onClick={() => router.push("/")} />
                <section className="flex flex-col items-start justify-center leading-3 text-left h-10 m-0 p-0 -mt-1.5 ml-1">
                    <CyberPunkText text="Albarms" duration={50} classname="italic font-semibold text-[#D9D9D9] text-xl" />
                    <p className="uppercase italic -ml-0.5 text-[#CCF96D] ">Workspace</p>
                </section>
            </Link>
            <nav
                id="navbar-action"
                className="flex items-center justify-center h-full"
            >
                <ul className="hidden md:flex items-center justify-center space-x-10 px-10 h-full">

                    <Link
                        href={"/portfolio"}
                        className={pathname === "/portfolio" ? "text-[#CCF96D]" : "hover:text-[#CCF96D]"}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href={"/about"}
                        className={pathname === "/about" ? "text-[#CCF96D]" : "hover:text-[#CCF96D]"}
                    >
                        About
                    </Link>
                    <Link
                        href={"/contact"}
                        className={pathname === "/contact" ? "text-[#CCF96D]" : "hover:text-[#CCF96D]"}
                    >
                        Contact
                    </Link>
                    <Link
                        href={"/resume/Albar_Moerhamsa.pdf"}
                        target="_blank"
                        className="hover:text-[#CCF96D]"
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
