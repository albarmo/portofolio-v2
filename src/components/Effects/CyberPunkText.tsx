import { useState, useEffect } from "react";

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const CyberPunkText: React.FC<{ text: string; duration: number }> = ({
    text,
    duration,
}) => {
    const [result, setResult] = useState<string>("");
    const ALPABETH = "ABCDEFGHIJKLMNOPQRSTUVWZYZ!@$^#*$)";

    const generateRandomText = (text: string) => {
        if (!text) return "*******";

        let interval: any = null;
        let iteration = 0;
        clearInterval(interval);

        const stringValue = text;
        const splitedTextValue = stringValue.split("");
        let cyberTextResult = "";

        interval = setInterval(() => {
            cyberTextResult = splitedTextValue
                .map((char: string, index: number) => {
                    if (index < iteration) {
                        return stringValue[index];
                    }
                    return ALPABETH[
                        randomIntFromInterval(0, ALPABETH.length - 1)
                    ];
                })
                .join("");
            setResult(cyberTextResult);
            if (iteration >= stringValue.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, duration);
    };

    useEffect(() => {
        if (!text) return;
        setResult(text);
        generateRandomText(text);
    }, [text]);

    return (
        <div>
            <h1
                id="cyberpunk-text"
                className="spaceMono w-max font-bold text-2xl md:text-4xl uppercase"
                onMouseEnter={() => generateRandomText(text)}
                onMouseLeave={() => setResult(text)}
            >
                {result || "******"}
            </h1>
        </div>
    );
};

export default CyberPunkText;
