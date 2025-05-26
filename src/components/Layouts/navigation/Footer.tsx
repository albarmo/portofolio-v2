"use client";
import { SOCIAL_MEDIA_LIST } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="overflow-x-hidden md:overflow-x-scroll w-full h-auto top-border flex flex-col md:flex-row justify-between z-[101] bg-black"
        >
            <div className="hidden md:block"></div>
            <div className="md:w-full left-border right-border flex flex-col md:flex-row justify-between">
                <div className="relative w-full md:w-2/6">
                    <section className="relative right-border bottom-border -ml-10">
                        <p className="pl-20 text-xl">
                            LETS CONNECTED
                        </p>
                        <svg
                            width="110"
                            height="110"
                            viewBox="0 0 98 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -top-14 -right-14"
                        >
                            <circle
                                cx="49"
                                cy="49"
                                r="48.5"
                                stroke="#232323"
                                strokeDasharray="2 2"
                            />
                        </svg>
                    </section>
                    <section className="px-16 text-sm font-extralight w-full">
                        <p>+62 812 80709980</p>
                        <p>moerhamsa@gmail.com</p>
                        <p>DKI Jakarta, INDONESIA</p>
                        <br />
                        <p>Albar Moerhamsa @2024 All rights reserved. </p>
                    </section>
                </div>
                <div className="p-5 md:p-14 w-full lg:w-11/12 flex flex-col lg:flex-row justify-between">
                    <section className="md:w-9/12 all-border hidden md:flex flex-col p-5 lg:p-0 md:flex-row justify-start invisible">
                        <Image
                            src="/images/themoer.jpg"
                            alt="THE MOER"
                            width={130}
                            height={130}
                            className="w-full md:w-60 object-contain right-border bottom-border"
                        />
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row md:h-32 justify-between bottom-border">
                                <section className="px-5 text-sm w-full right-border">
                                    <p className="text-2xl font-semibold">
                                        The Journey
                                    </p>
                                    <p>By THE MOER</p>
                                </section>
                            </div>
                            <div className="w-full bg-blue-800">
                                <AudioPlayer
                                    autoPlay={false}
                                    src={"/sound/Journey.mp3"}
                                    className="bg-black"
                                    layout="stacked"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="grid mt-10 md:mt-0 grid-cols-5 md:grid-cols-2 gap-4">
                        {SOCIAL_MEDIA_LIST.map((social, index) => (
                            <Link
                                href={social.profile_link}
                                target="_blank"
                                key={index}
                                className="p-2 cursor-pointer bg-slate-100 w-12 h-12 rounded-full text-black flex items-center justify-center"
                            >
                                <Image
                                    src={social.iconPath}
                                    alt={social.platform_name}
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
            <div className="hidden md:block"></div>
        </footer>
    );
};

export default Footer;
