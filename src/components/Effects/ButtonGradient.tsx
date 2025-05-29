"use client";
import Link from "next/link";
import React from "react";

export default function ButtonGradient({
    title,
    onClick,
}: {
    title: string;
    onClick?: () => void;
}) {
    return (
        <div>
            <button
                onClick={onClick}
                className="card-wrapper w-full h-14 md:h-11 md:w-40 rounded-lg cursor-pointer"
            >
                <Link href='https://wa.me/6281280709980?text=Halo%2C%20Albar%20tertarik%20dengan%20portofolio%20anda' target="_blank">
                    <p className="card-content rounded-lg bg-gradient-to-r from-black/90 to-slate-900/80">
                        {title}
                    </p>
                </Link>
            </button>
        </div>
    );
}
