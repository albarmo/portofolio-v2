"use client";
import React, { useEffect } from "react";
//@ts-ignore
import CircleType from "circletype";

const CircleText = () => {
    useEffect(() => {
        if (!document) return;
        let text = document.getElementById("text");
        let rotate = new CircleType(text).radius(65);

        window.addEventListener("scroll", function () {
            //@ts-ignore
            text.style.transform = "rotate(" + window.scrollY * 0.15 + "deg)";
        });
    }, []);

    return (
        <div className="container-text z-50">
            <div className="circle">
                <p id="text" className="text-[#D5D5D5]">
                    intuitive and visually user experiences
                </p>
            </div>
        </div>
    );
};

export default CircleText;
