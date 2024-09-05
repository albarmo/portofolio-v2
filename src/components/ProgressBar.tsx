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
                        router.push("/");
                    }, 1000);
                }
                temp++;
                setProgress(temp);
            },
            undefined
        );
        setProgress(temp);
    }, []);

    return (
        <section className="flex flex-col w-full justify-between">
            <progress
                id="progressBar"
                value={progress}
                max="100"
                className="h-[1px] w-full bg-green-500"
            />
            <section className="flex justify-center items-center m-0">
                <p className="text-xs">{progress}%</p>
            </section>
        </section>
    );
};

export default ProgressBar;
