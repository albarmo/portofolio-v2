"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import InputLabel from "@/components/input.label";
import Input from "@/components/input";

export default function ContactPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");

    const INFORMATION = [
        {
            title: "Get in touch",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto eaque, ea velit nihil nobis? Sit quos, nobis quia doloremque repudiandae similique illo dolores eos harum exercitationem laboriosam sequi necessitatibus!",
            address: "Jl. H Mandor, No.12a, 005/12 South Jakarta, Indonesia",
            phone: "085711123519",
            mail: "devoria@gmail.com",
        },
    ];
    return (
        <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                {INFORMATION?.map((item, index) => (
                    <section
                        key={index}
                        className="w-full h-screen p-28 bg-[url('/images/cover/bg-cover.png')] bg-black/50 flex flex-col py-52"
                    >
                        <h1 className="text-4xl font-bold">
                            {item?.title ?? ""}{" "}
                        </h1>
                        <h2 className="text-base/8 w-10/12 pt-8 whitespace-pre-line ">
                            {item?.desc ?? ""}
                        </h2>
                        <div className="pt-12 space-y-10 w-96">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={"icons/building.svg"}
                                    width={40}
                                    height={40}
                                    alt="get in touch icon"
                                />
                                <h1>{item?.address ?? ""}</h1>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={"icons/phone.svg"}
                                    width={40}
                                    height={40}
                                    alt="get in touch icon"
                                />
                                <h1>{item?.phone ?? ""}</h1>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={"icons/email.svg"}
                                    width={40}
                                    height={40}
                                    alt="get in touch icon"
                                />
                                <h1>{item?.mail ?? ""}</h1>
                            </div>
                        </div>
                    </section>
                ))}
                <section className="w-full h-screen p-28 bg-[#111727] py-20 lg:py-52">
                    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-5 2xl:gap-y-0 gap-x-5 2xl:gap-x-5  pb-10">
                        <div className="w-full space-y-1">
                            <InputLabel label="First name" />
                            <Input placeholder="Anto" onChange={setFirstName} />
                        </div>
                        <div className="w-full space-y-1">
                            <InputLabel label="Last name" />
                            <Input
                                placeholder="Frozen"
                                onChange={setLastName}
                            />
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="w-full space-y-1">
                            <InputLabel label="Email" />
                            <Input
                                placeholder="anto@gmail.com"
                                onChange={setMail}
                            />
                        </div>
                        <div className="w-full space-y-1">
                            <InputLabel label="Phone number" />
                            <Input placeholder="0857198972" />
                        </div>
                        <div className="w-full h-96 space-y-1">
                            <InputLabel label="Message" />
                            <textarea className="w-full h-40 flex-1 px-2 py-1 bg-[#1e2434] focus:outline-none flex-wrap focus-within:ring focus-within:border-blue-300 rounded-lg" />
                            <div className="w-full flex justify-end mt-5">
                                <Link
                                    href={`mailto:${mail}?subject=${firstName}%20${lastName}&body=Body-goes-here`}
                                    className="card-wrapper w-full h-14 md:h-11 md:w-40 rounded-lg cursor-pointer"
                                >
                                    <p className="card-content rounded-lg bg-gradient-to-r from-black/90 to-slate-900/80">
                                        Send message
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
