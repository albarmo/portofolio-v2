"use client"

import React, { useRef } from 'react'
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GSAPSmootherProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const main = useRef<HTMLDivElement | null>(null);
    let smoother = useRef<ScrollSmoother | null>(null);

    useGSAP(
        () => {
            if (!smoother) return
            smoother.current = ScrollSmoother.create({
                smooth: 1.5,
                effects: true,
            });
        },
        {
            scope: main,
        }
    );
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}

export default GSAPSmootherProvider