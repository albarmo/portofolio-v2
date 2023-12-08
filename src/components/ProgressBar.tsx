import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ProgressBar = () => {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let temp = 0;
        const interval = setInterval(
            () => {
                if (temp >= 99) {
                    clearInterval(interval);
                    setTimeout(() => {
                        router.replace("/");
                    }, 1000);
                }
                temp++;
                setProgress(temp);
            },
            progress >= 10 ? 50000 : undefined
        );
        setProgress(temp);
    }, []);

    return (
        <>
            <progress
                id="progressBar"
                value={progress}
                max="100"
                className="h-[2px] w-full mb-2 bg-fuchsia-500"
            />
            <section className="flex justify-between">
                <p className="text-xs">
                    Loading <span>${progress}%</span>
                </p>
                <p className="text-xs">mounting resources</p>
            </section>
        </>
    );
};

export default ProgressBar;
