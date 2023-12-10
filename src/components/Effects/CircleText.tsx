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
        <div className="container-text">
            <div className="circle">
                <p id="text">
                    The &#8226; Future &#8226; Is &#8226; Start &#8226; NO
                    &#8226;
                </p>
            </div>
        </div>
    );
};

export default CircleText;
