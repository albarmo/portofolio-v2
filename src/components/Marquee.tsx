import { STACK_LIST } from "@/utils/data";
import Image from "next/image";
import React from "react";

import Marquee from 'react-fast-marquee';

type PartnerType = {
    id: number | string;
    name: string;
    image: string;
    link: string;
};

const PARTNER_LIST: PartnerType[] = [
    { id: 0, name: 'Partner 1', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 1, name: 'Partner 2', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 2, name: 'Partner 3', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 3, name: 'Partner 4', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 4, name: 'Partner 5', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 0, name: 'Partner 1', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 1, name: 'Partner 2', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 2, name: 'Partner 3', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 3, name: 'Partner 4', image: '/images/albarm-white-logo.svg', link: '/' },
    { id: 4, name: 'Partner 5', image: '/images/albarm-white-logo.svg', link: '/' }
];


const MarqueeList = () => {
    return (
        <div className="flex w-full h-min justify-center md:h-24">
            <Marquee speed={200}>
                <div className="flex items-center justify-center space-x-20">
                    {PARTNER_LIST.map((partner) => (
                        <Image
                            key={partner.id}
                            className=" object-contain grayscale hover:grayscale-0 size-10"
                            src={partner?.image}
                            alt={partner.name}
                            width={60}
                            height={60}
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeList;
