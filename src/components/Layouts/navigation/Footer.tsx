"use client";
import Image from "next/image";
import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Footer = () => {
    const audioSource =
        "https://cdn.pixabay.com/audio/2022/04/25/audio_5d61b5204f.mp3";
    const [userClicked, setUserClicked] = useState(false);

    return (
        <footer className="w-full h-auto top-border mt-16 flex flex-col md:flex-row justify-between z-[101] bg-black">
            <div className="hidden md:block"></div>
            <div className="md:w-10/12 left-border right-border flex flex-col md:flex-row justify-between">
                <div className="relative w-full md:w-2/6">
                    <section className="relative right-border bottom-border -ml-10">
                        <p className="pl-20 text-3xl font-semibold">
                            THE BACKROOM
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
                    <section className="px-16 text-sm w-full">
                        <p>
                            Make your React component async and await your data.
                            Next.js supports both server and client data
                            fetching.
                        </p>
                        <br />
                        <p>Albar Moerhamsa @2024 All rights reserved. </p>
                    </section>
                </div>
                <div className=" p-5  md:p-14 w-full md:w-11/12 flex flex-col md:flex-row justify-between">
                    <section className=" md:w-9/12 p-0 all-border flex justify-start">
                        <Image
                            src="/images/themoer.jpg"
                            alt="THE MOER"
                            width={130}
                            height={130}
                            className="w-60 object-contain right-border"
                        />
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row h-32 justify-between bottom-border">
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
                                    onPlay={(e) => console.log("onPlay")}
                                    className="bg-black"
                                    layout="stacked"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="grid mt-10 md:mt-0 grid-cols-5 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4, 5].map((social, index) => (
                            <span
                                key={index}
                                className="p-2 cursor-pointer bg-slate-100 w-12 h-12 rounded-full text-black flex items-center justify-center"
                            >
                                {social}
                            </span>
                        ))}
                    </section>
                </div>
            </div>
            <div className="hidden md:block"></div>
        </footer>
    );
};

export default Footer;
