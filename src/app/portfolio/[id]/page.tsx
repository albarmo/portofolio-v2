"use client";
import Breadcrumb from "@/components/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
    const CLIENT = [
        {
            label: "klient",
            title: "PT Anto",
        },
        {
            label: "tahun",
            title: "2020",
        },
        {
            label: "tipe",
            title: "E-commerce",
        },
        {
            label: "lokasi client",
            title: "Jakarta, Indonesia",
        },
        {
            label: "link",
            link: "https://www.facebook.com/?locale=id_ID",
        },
        {
            label: "device",
            image: "/icons/back.svg",
        },
    ];

    const PROJECT_RESPONBILITIES = [
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
        {
            label: "Customer Service",
        },
    ];

    const TECHNOLY_STACK = [
        {
            imgUrl: "/images/device-ipad.png",
            title: "Wordpress",
        },
        {
            imgUrl: "/images/device-ipad.png",
            title: "Wordpress",
        },
        {
            imgUrl: "/images/device-ipad.png",
            title: "Wordpress",
        },
        {
            imgUrl: "/images/device-ipad.png",
            title: "Wordpress",
        },
        {
            imgUrl: "/images/device-ipad.png",
            title: "Wordpress",
        },
        {
            imgUrl: "/images/device-ipad.png",
            title: "Wordpress",
        },
    ];

    return (
        <>
            <main className="w-full p-20">
                <Link
                    href={"#"}
                    className="group w-fit flex items-center space-x-3 hover:text-gray-400"
                >
                    <Image
                        src={"/icons/back.svg"}
                        width={20}
                        height={20}
                        alt=""
                        className=""
                    />
                    <h1 className="text-xl uppercase font-normal">back</h1>
                </Link>
                <div className="w-full h-full">
                    {/* Hero */}
                    <section className="">
                        <Breadcrumb currentPage={"card detail"} />
                        <h1 className="text-center text-3xl py-5">
                            Card Title
                        </h1>
                        <div className="w-full h-full ">
                            <Image
                                src={"/images/device-ipad.png"}
                                width={10000}
                                height={10000}
                                alt=""
                                className="w-full h-[800px] bg-cover"
                            />
                        </div>
                    </section>

                    {/* Client */}
                    <section className=" w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center pt-10">
                        {CLIENT.map((item, index) => (
                            <div key={index} className="">
                                <div className="w-32 p-1">
                                    <h1 className="text-[#003CFF] text-base font-bold uppercase">
                                        {item.label}
                                    </h1>
                                </div>
                                <div className="w-32 p-1">
                                    {item.title && (
                                        <h1 className="text-xl">
                                            {item.title}
                                        </h1>
                                    )}
                                </div>
                                <div className="w-32 p-1">
                                    {item.link && (
                                        <Link
                                            href={item.link}
                                            className="text-white text-xl"
                                        >
                                            <h1>{item.title}</h1>
                                        </Link>
                                    )}
                                </div>
                                <div className="w-32 p-1">
                                    {item.image && (
                                        <Image
                                            src={`${item.image}`}
                                            height={40}
                                            width={40}
                                            alt=""
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* Project Details */}
                    <section className="w-full grid grid-cols-1 gap-y-20 lg:grid-cols-2 py-14 justify-items-center">
                        <div className="">
                            <span>
                                <h1 className="text-xl">What we do</h1>
                                <h2 className="text-3xl font-bold text-[#003CFF]">
                                    Project Details
                                </h2>
                            </span>
                            <p className="pt-5 text-base xl:text-xl">
                                Onmezzo is a new platform to inspire you to Live
                                your Lifestyle. Its purposes are to understand
                                user’s style preferences and identify their
                                unique lifestyle. Onmezzo makes lifestyle more
                                simple and accessible for everyone. This is the
                                Wordpress E-commerce web app using Woocommerce
                                technology for fashion brand called Metrox. The
                                company is a powerhouse in Indonesia fashion
                                industry and have few famous brand under their
                                name. They have Wakai, Keds, paul frank, The
                                Little Things She needs, Pro Keds, Stod, Dyson,
                                Shaga, Osim and few other.
                            </p>
                        </div>
                        <div className="">
                            <Image
                                src={"/images/device-ipad.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-96 h-96 bg-cover"
                            />
                        </div>
                    </section>

                    {/* Responbilities */}
                    <section className="w-full flex flex-col py-14 justify-items-center">
                        <div className="">
                            <span>
                                <h1 className="text-xl">What we do</h1>
                                <h2 className="text-3xl font-bold text-[#003CFF]">
                                    Our Responsibility
                                </h2>
                            </span>
                            <p className="pt-5 text-base xl:text-xl">
                                Onmezzo is a new platform to inspire you to Live
                                your Lifestyle. Its purposes are to understand
                                user’s style preferences and identify their
                                unique lifestyle. Onmezzo makes lifestyle more
                                simple and accessible for everyone. This is the
                                Wordpress E-commerce web app using Woocommerce
                                technology for fashion brand called Metrox. The
                                company is a powerhouse in Indonesia fashion
                                industry and have few famous brand under their
                                name. They have Wakai, Keds, paul frank, The
                                Little Things She needs, Pro Keds, Stod, Dyson,
                                Shaga, Osim and few other.
                            </p>
                        </div>
                        <div className="w-full pt-10 flex justify-center">
                            <Image
                                src={"/images/device-ipad.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-10/12 h-[700px] bg-cover"
                            />
                        </div>
                    </section>

                    {/* Project Responbilities */}
                    <section className="w-full flex flex-col py-14 justify-items-center">
                        <div>
                            <h1 className="text-xl">What we do</h1>
                            <h2 className="text-3xl font-bold text-[#003CFF]">
                                Project Responsibilities
                            </h2>
                        </div>
                        <div className="p-5 space-x-5 space-y-3 pt-10">
                            {PROJECT_RESPONBILITIES.map((item, index) => (
                                <button
                                    key={index}
                                    className="px-10 cursor-pointer group hover:bg-gray-200 duration-200 py-2 bg-white rounded-full "
                                >
                                    <ul className="list-disc">
                                        <li className="text-black group-hover:text-blue-600">
                                            {item.label}
                                        </li>
                                    </ul>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Technology Stack */}
                    <section className="w-full flex flex-col py-14 justify-items-center">
                        <div>
                            <h1 className="text-xl">What we do</h1>
                            <h2 className="text-3xl font-bold text-[#003CFF]">
                                Technology Stack
                            </h2>
                        </div>
                        <div className="flex flex-col col-span-2 lg:flex-row justify-center items-center w-full p-5 space-x-8 space-y-3 pt-10">
                            {TECHNOLY_STACK.map((item, index) => (
                                <div key={index} className="w-fit space-y-2">
                                    <Image
                                        src={`${item.imgUrl}`}
                                        width={130}
                                        height={130}
                                        alt=""
                                        className="w-full"
                                    />
                                    <h1 className="text-center">
                                        {item.title}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
