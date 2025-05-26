"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CircleText from "@/components/Effects/CircleText";
import StackIcon from "tech-stack-icons";
import { PROJECT_LIST, STACK_LIST } from "@/utils/data";
import { ARTICLE_LIST } from "@/utils/sampled-html";
import { COMPONENT_LIST } from "@/utils/hwtd";
import Lanyard from "@/components/Model/Lanyard";
import ButtonGradient from "@/components/Effects/ButtonGradient";
import PerspectiveText from "@/components/Effects/PerspectiveText";

const STATS = [
    {
        title: "EXPERIENCE",
        description: "4 Year +",
    },
    {
        title: "WEB",
        description: "3 Years",
    },
    {
        title: "Mobile",
        description: "1 Years",
    },
];

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
            <div className="bg-red-100 fixed left-20 bottom-20">
                <CircleText />
            </div>

            {/* HERO */}
            <div
                id="hero-background"
                className="relative h-lvh flex justify-center items-center"
            >
                <svg className="absolute w-full h-[500px] top-1/4 -z-50" width="611" height="524" viewBox="0 0 611 524" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* A-CHAR */}
                    <path stroke="#25262A" strokeWidth="0.8" strokeDasharray="3.5" d="M172.985 97.0664C175.004 98.0759 177.022 99.0853 179.101 100.125C179.101 141.514 179.101 182.902 179.101 225.544C194.238 225.544 209.376 225.544 224.971 225.544C228.029 237.78 228.029 237.78 225.067 244.568C214.418 260.438 205.926 269.885 188.275 277.547C185.248 277.547 182.22 277.547 179.101 277.547C179.243 280.761 179.385 283.975 179.531 287.286C180.508 318.722 178.623 343.27 156.548 367.836C128.145 393.789 128.145 393.789 111.825 393.789C107.055 384.247 108.397 374.121 108.468 363.653C108.473 361.286 108.477 358.918 108.482 356.478C108.499 348.904 108.537 341.33 108.576 333.756C108.591 328.626 108.605 323.496 108.618 318.366C108.651 305.779 108.704 293.193 108.767 280.606C105.483 280.843 102.2 281.079 98.8166 281.323C94.4247 281.622 90.0328 281.921 85.6409 282.219C82.4095 282.455 82.4095 282.455 79.1127 282.696C60.2361 283.952 41.9243 282.919 23.1428 280.606C19.5121 269.711 21.6199 265.563 26.38 255.441C33.5721 241.888 41.3216 232.751 55.9209 227.05C71.2268 223.747 87.0913 224.912 102.651 225.544C102.491 221.771 102.491 221.771 102.329 217.921C101.48 182.901 106.872 154.791 130.173 127.656C142.985 116.015 157.363 104.643 172.985 97.0664Z" />
                    <path className='path-a' stroke="#25262A" strokeWidth="0.8" strokeDasharray="3.5" d="M172.985 97.0664C175.004 98.0759 177.022 99.0853 179.101 100.125C179.101 141.514 179.101 182.902 179.101 225.544C194.238 225.544 209.376 225.544 224.971 225.544C228.029 237.78 228.029 237.78 225.067 244.568C214.418 260.438 205.926 269.885 188.275 277.547C185.248 277.547 182.22 277.547 179.101 277.547C179.243 280.761 179.385 283.975 179.531 287.286C180.508 318.722 178.623 343.27 156.548 367.836C128.145 393.789 128.145 393.789 111.825 393.789C107.055 384.247 108.397 374.121 108.468 363.653C108.473 361.286 108.477 358.918 108.482 356.478C108.499 348.904 108.537 341.33 108.576 333.756C108.591 328.626 108.605 323.496 108.618 318.366C108.651 305.779 108.704 293.193 108.767 280.606C105.483 280.843 102.2 281.079 98.8166 281.323C94.4247 281.622 90.0328 281.921 85.6409 282.219C82.4095 282.455 82.4095 282.455 79.1127 282.696C60.2361 283.952 41.9243 282.919 23.1428 280.606C19.5121 269.711 21.6199 265.563 26.38 255.441C33.5721 241.888 41.3216 232.751 55.9209 227.05C71.2268 223.747 87.0913 224.912 102.651 225.544C102.491 221.771 102.491 221.771 102.329 217.921C101.48 182.901 106.872 154.791 130.173 127.656C142.985 116.015 157.363 104.643 172.985 97.0664Z" mask="url(#path-1-inside-1_1529_9)" />
                    {/* M-CHAR */}
                    <path className='path-m' stroke="#25262A" strokeWidth="0.8" strokeDasharray="3.5" d="M531.559 0.0121739C535.379 0.0081565 539.2 0.00413913 543.136 0C547.085 0.0120521 551.034 0.0241043 555.102 0.0365216C561.062 0.0184434 561.062 0.0184434 567.142 0C570.954 0.00401737 574.766 0.00803474 578.694 0.0121739C582.165 0.0156891 585.637 0.0192043 589.213 0.022826C596.99 0.36635 603.404 1.27594 610.807 3.5426C606.147 14.9897 599.73 20.9816 590.161 28.6695C587.614 30.7625 585.068 32.8556 582.443 35.0121C556.96 51.7384 534.616 51.4875 504.851 50.8746C499 50.8113 499 50.8113 493.031 50.7468C483.465 50.6373 473.902 50.4839 464.338 50.2903C462.926 62.5428 462.926 62.5428 469.682 68.5267C471.968 70.3506 474.254 72.1745 476.609 74.0537C489.025 84.0832 489.025 84.0832 492.385 90.8049C492.687 95.0157 492.801 99.2408 492.816 103.462C492.833 106.11 492.85 108.758 492.867 111.487C492.87 114.398 492.874 117.309 492.877 120.308C492.893 123.369 492.909 126.43 492.925 129.584C492.958 136.245 492.985 142.906 493.006 149.567C493.043 160.095 493.104 170.622 493.172 181.15C493.364 211.087 493.533 241.024 493.636 270.961C493.701 289.256 493.811 307.551 493.95 325.845C493.995 332.833 494.022 339.822 494.031 346.81C494.047 356.564 494.119 366.316 494.204 376.069C494.194 378.98 494.185 381.891 494.175 384.891C494.21 387.539 494.245 390.187 494.28 392.915C494.296 396.376 494.296 396.376 494.311 399.907C495.084 406.87 495.084 406.87 504.851 411.806C504.851 413.862 504.851 415.919 504.851 418.039C508.964 420.095 513.078 422.152 517.316 424.272C515.583 435.638 511.735 439.917 502.903 447.061C492.063 456.008 482.659 465.426 473.48 476.059C464.251 482.66 456.892 483.154 445.64 483.485C435.061 479.565 435.061 479.565 424.41 473.746C420.616 471.721 416.822 469.696 413.028 467.671C411.176 466.658 409.325 465.644 407.417 464.599C399.611 460.37 391.663 456.444 383.702 452.515C379.417 450.372 375.132 448.23 370.847 446.087C376.693 433.349 384.918 422.945 393.429 411.879C408.392 386.083 409.57 360.418 409.023 331.166C408.999 326.05 408.999 326.05 408.974 320.83C408.758 298.058 407.326 275.526 405.127 252.864C403.813 254.477 402.498 256.09 401.144 257.753C385.91 276.45 385.91 276.45 373.964 280.912C365.274 281.348 356.923 281.501 348.254 281.302C345.932 281.274 343.61 281.245 341.217 281.216C335.512 281.143 329.807 281.032 324.102 280.912C324.24 297.938 324.457 314.961 324.749 331.985C324.836 337.774 324.902 343.562 324.946 349.351C325.013 357.685 325.159 366.014 325.319 374.347C325.323 376.925 325.327 379.503 325.331 382.159C325.731 398.021 327.725 406.569 339.684 418.039C344.311 421.124 344.311 421.124 349.033 424.272C342.293 439.206 331.705 449.454 320.401 461.085C318.382 463.285 316.364 465.484 314.284 467.751C299.197 483.23 299.197 483.23 285.853 484.313C269.567 478.782 254.136 471.942 238.597 464.591C235.425 463.119 232.253 461.647 228.986 460.13C221.205 456.513 213.437 452.871 205.68 449.204C201.664 453.162 197.657 457.128 193.653 461.098C191.42 463.305 189.188 465.513 186.887 467.788C180.308 474.349 180.308 474.349 173.737 483.291C167.427 490.728 165.292 491.617 155.818 492.835C148.173 491.204 148.173 491.204 139.457 488.55C106.548 479.808 64.4676 472.931 33.6226 490.534C20.1186 499.822 12.1963 508.345 6.23273 524C4.17593 524 2.11913 524 0 524C1.88485 495.098 16.2799 468.83 37.3964 449.204C69.2331 422.786 105.358 417.987 145.614 420.346C160.124 422.003 174.316 425.98 188.164 430.554C195.156 432.837 195.156 432.837 205.68 433.621C222.863 420.474 233.795 402.091 236.844 380.64C237.478 370.318 237.718 359.997 237.939 349.658C238.014 346.592 238.089 343.526 238.167 340.367C238.887 309.525 239.32 278.679 239.688 247.831C239.842 235.32 240.067 222.816 240.391 210.308C240.724 197.367 240.881 184.438 240.886 171.493C240.918 166.848 241.012 162.203 241.176 157.56C241.83 137.949 242.069 120.386 228.242 105.118C219.245 96.3635 209.626 88.7852 199.447 81.4554C201.297 71.2259 201.963 69.4626 210.61 62.6467C213.932 60.5617 217.255 58.4767 220.677 56.3285C234.031 48.0212 234.031 48.0212 246.424 38.4207C252.425 34.7077 252.425 34.7077 259.839 34.659C270.859 38.9294 278.215 46.0489 286.511 54.1859C289.651 57.193 292.796 60.1959 295.945 63.1946C297.315 64.5293 298.684 65.8641 300.095 67.2393C305.833 72.7658 305.833 72.7658 315.187 78.4842C321.368 83.641 323.794 86.5175 325.857 94.3695C326.566 102.697 326.691 110.85 326.609 119.207C326.674 123.739 326.674 123.739 326.739 128.363C326.855 137.985 326.844 147.603 326.829 157.226C326.885 163.761 326.95 170.296 327.023 176.832C327.201 192.829 327.205 208.813 327.218 224.815C353.957 224.815 380.695 224.815 408.244 224.815C408.299 209.611 408.289 194.437 408.11 179.239C408.07 174.076 408.067 168.913 408.104 163.751C409.367 134.861 409.367 134.861 400.453 108.398C394.93 103.657 389.732 100.415 383.313 97.0379C379.682 94.1249 376.106 91.1403 372.6 88.078C369.965 85.8925 367.33 83.7071 364.615 81.4554C365.792 73.9781 366.598 70.009 372.316 64.8616C374.249 63.6808 376.183 62.4999 378.176 61.2833C381.387 59.2977 381.387 59.2977 384.664 57.272C386.918 55.9322 389.171 54.5924 391.493 53.212C393.674 51.8601 395.856 50.5083 398.103 49.1155C408.285 42.9096 418.363 37.2674 429.376 32.6747C437.635 29.2167 444.19 25.74 451.483 20.6834C475.913 4.96442 502.799 0.0412381 531.559 0.0121739Z" />
                    <path stroke="#25262A" strokeWidth="0.8" strokeDasharray="3.5" d="M531.559 0.0121739C535.379 0.0081565 539.2 0.00413913 543.136 0C547.085 0.0120521 551.034 0.0241043 555.102 0.0365216C561.062 0.0184434 561.062 0.0184434 567.142 0C570.954 0.00401737 574.766 0.00803474 578.694 0.0121739C582.165 0.0156891 585.637 0.0192043 589.213 0.022826C596.99 0.36635 603.404 1.27594 610.807 3.5426C606.147 14.9897 599.73 20.9816 590.161 28.6695C587.614 30.7625 585.068 32.8556 582.443 35.0121C556.96 51.7384 534.616 51.4875 504.851 50.8746C499 50.8113 499 50.8113 493.031 50.7468C483.465 50.6373 473.902 50.4839 464.338 50.2903C462.926 62.5428 462.926 62.5428 469.682 68.5267C471.968 70.3506 474.254 72.1745 476.609 74.0537C489.025 84.0832 489.025 84.0832 492.385 90.8049C492.687 95.0157 492.801 99.2408 492.816 103.462C492.833 106.11 492.85 108.758 492.867 111.487C492.87 114.398 492.874 117.309 492.877 120.308C492.893 123.369 492.909 126.43 492.925 129.584C492.958 136.245 492.985 142.906 493.006 149.567C493.043 160.095 493.104 170.622 493.172 181.15C493.364 211.087 493.533 241.024 493.636 270.961C493.701 289.256 493.811 307.551 493.95 325.845C493.995 332.833 494.022 339.822 494.031 346.81C494.047 356.564 494.119 366.316 494.204 376.069C494.194 378.98 494.185 381.891 494.175 384.891C494.21 387.539 494.245 390.187 494.28 392.915C494.296 396.376 494.296 396.376 494.311 399.907C495.084 406.87 495.084 406.87 504.851 411.806C504.851 413.862 504.851 415.919 504.851 418.039C508.964 420.095 513.078 422.152 517.316 424.272C515.583 435.638 511.735 439.917 502.903 447.061C492.063 456.008 482.659 465.426 473.48 476.059C464.251 482.66 456.892 483.154 445.64 483.485C435.061 479.565 435.061 479.565 424.41 473.746C420.616 471.721 416.822 469.696 413.028 467.671C411.176 466.658 409.325 465.644 407.417 464.599C399.611 460.37 391.663 456.444 383.702 452.515C379.417 450.372 375.132 448.23 370.847 446.087C376.693 433.349 384.918 422.945 393.429 411.879C408.392 386.083 409.57 360.418 409.023 331.166C408.999 326.05 408.999 326.05 408.974 320.83C408.758 298.058 407.326 275.526 405.127 252.864C403.813 254.477 402.498 256.09 401.144 257.753C385.91 276.45 385.91 276.45 373.964 280.912C365.274 281.348 356.923 281.501 348.254 281.302C345.932 281.274 343.61 281.245 341.217 281.216C335.512 281.143 329.807 281.032 324.102 280.912C324.24 297.938 324.457 314.961 324.749 331.985C324.836 337.774 324.902 343.562 324.946 349.351C325.013 357.685 325.159 366.014 325.319 374.347C325.323 376.925 325.327 379.503 325.331 382.159C325.731 398.021 327.725 406.569 339.684 418.039C344.311 421.124 344.311 421.124 349.033 424.272C342.293 439.206 331.705 449.454 320.401 461.085C318.382 463.285 316.364 465.484 314.284 467.751C299.197 483.23 299.197 483.23 285.853 484.313C269.567 478.782 254.136 471.942 238.597 464.591C235.425 463.119 232.253 461.647 228.986 460.13C221.205 456.513 213.437 452.871 205.68 449.204C201.664 453.162 197.657 457.128 193.653 461.098C191.42 463.305 189.188 465.513 186.887 467.788C180.308 474.349 180.308 474.349 173.737 483.291C167.427 490.728 165.292 491.617 155.818 492.835C148.173 491.204 148.173 491.204 139.457 488.55C106.548 479.808 64.4676 472.931 33.6226 490.534C20.1186 499.822 12.1963 508.345 6.23273 524C4.17593 524 2.11913 524 0 524C1.88485 495.098 16.2799 468.83 37.3964 449.204C69.2331 422.786 105.358 417.987 145.614 420.346C160.124 422.003 174.316 425.98 188.164 430.554C195.156 432.837 195.156 432.837 205.68 433.621C222.863 420.474 233.795 402.091 236.844 380.64C237.478 370.318 237.718 359.997 237.939 349.658C238.014 346.592 238.089 343.526 238.167 340.367C238.887 309.525 239.32 278.679 239.688 247.831C239.842 235.32 240.067 222.816 240.391 210.308C240.724 197.367 240.881 184.438 240.886 171.493C240.918 166.848 241.012 162.203 241.176 157.56C241.83 137.949 242.069 120.386 228.242 105.118C219.245 96.3635 209.626 88.7852 199.447 81.4554C201.297 71.2259 201.963 69.4626 210.61 62.6467C213.932 60.5617 217.255 58.4767 220.677 56.3285C234.031 48.0212 234.031 48.0212 246.424 38.4207C252.425 34.7077 252.425 34.7077 259.839 34.659C270.859 38.9294 278.215 46.0489 286.511 54.1859C289.651 57.193 292.796 60.1959 295.945 63.1946C297.315 64.5293 298.684 65.8641 300.095 67.2393C305.833 72.7658 305.833 72.7658 315.187 78.4842C321.368 83.641 323.794 86.5175 325.857 94.3695C326.566 102.697 326.691 110.85 326.609 119.207C326.674 123.739 326.674 123.739 326.739 128.363C326.855 137.985 326.844 147.603 326.829 157.226C326.885 163.761 326.95 170.296 327.023 176.832C327.201 192.829 327.205 208.813 327.218 224.815C353.957 224.815 380.695 224.815 408.244 224.815C408.299 209.611 408.289 194.437 408.11 179.239C408.07 174.076 408.067 168.913 408.104 163.751C409.367 134.861 409.367 134.861 400.453 108.398C394.93 103.657 389.732 100.415 383.313 97.0379C379.682 94.1249 376.106 91.1403 372.6 88.078C369.965 85.8925 367.33 83.7071 364.615 81.4554C365.792 73.9781 366.598 70.009 372.316 64.8616C374.249 63.6808 376.183 62.4999 378.176 61.2833C381.387 59.2977 381.387 59.2977 384.664 57.272C386.918 55.9322 389.171 54.5924 391.493 53.212C393.674 51.8601 395.856 50.5083 398.103 49.1155C408.285 42.9096 418.363 37.2674 429.376 32.6747C437.635 29.2167 444.19 25.74 451.483 20.6834C475.913 4.96442 502.799 0.0412381 531.559 0.0121739Z" mask="url(#path-1-inside-1_1529_9)" />
                </svg>
                <div className="p-10 flex flex-col h-min space-y-3.5 w-full md:flex-col justify-center items-center">
                    <section className="flex space-x-3">
                        <Image src={'/images/id.png'} alt="IDN" width={16} height={16} className="object-contain" />
                        <p className="">JKT/IDN</p>
                    </section>
                    <h1 className="text-5xl leading-[60px] md:text-[90px] font-black uppercase md:leading-[85px] text-center">Interactive. Intuitive.<br /><span className="text-[#0A0A0B] text-outline">Impactful.</span></h1>
                    <p className="w-full md:w-1/3 text-center">
                        I believe great software is more than just functionality — it’s about clarity, performance, and empathy.
                        That’s why I bring a design-first mindset into my engineering work, focusing on delivering seamless user interfaces and robust architectures that scale.
                    </p>
                </div>
            </div>

            {/* TECH STACK */}
            <div className="w-full p-5 md:p-24 md:space-y-10 bg-black/50 bg-contain bg-center">
                <section className="space-y-5">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Adopt composable architecture <br /> for a future-proof,
                        adaptable system.
                    </h2>
                    <p className="text-lg md:w-1/2 leading-6 pb-5">
                        Embrace composable architecture at your own pace,
                        unlocking modular and efficient solutions.
                    </p>
                </section>
                <div id="tech-stack" className="flex flex-col md:flex-row items-start justify-between space-y-5 md:space-x-20 w-full h-full">
                    <section className="size-96 w-full md:w-max bg-[#053519] hover:bg-black border flex justify-center items-center overflow-clip">
                        <PerspectiveText />
                    </section>
                    <section className="relative w-full md:w-3/4 h-full py-10 md:py-0 grid grid-cols-10 overflow-x-scroll hide-scrollbar gap-x-24 gap-y-8">
                        <div className="opacity-gradient absolute left-0 top-0 w-full h-full" />
                        {STACK_LIST.map((tech, index) => (
                            <div
                                key={index}
                                className="text-center h-14 p-2.5 border flex items-center justify-center rounded-full aspect-square bg-gradient-to-b from-slate-500 via-slate-900 to-black"
                            >
                                <StackIcon
                                    name={tech.toLowerCase()}
                                    className="size-6"
                                />
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* PROJECTS */}
            <div id="projects" className="w-full h-full my-10 px-5 md:px-10">
                <h2 className="text-4xl uppercase my-10">
                    Work<span className="font-semibold text-[#CCF96D] italic">Space</span>
                </h2>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 md:gap-y-16 w-full p-0">
                    {PROJECT_LIST?.map((project) => (
                        <article
                            key={project.title}
                            className="group shadow-xl cursor-pointer w-full h-80 transition-all duration-500 transform-gpu delay-75 rounded-lg bg-[url('/images/cover/bg-green-4.png')] bg-cover bg-center"
                        >
                            <section className="relative w-full h-full bg-gradient-to-b from-transparent to-black hover:to-black flex justify-center items-start">
                                <Image
                                    src={project.image}
                                    alt="Localoka"
                                    width={220}
                                    height={30}
                                    className="grayscale w-full opacity-50 group-hover:opacity-95 group-hover:-translate-y-1/4 group-hover:border-2 rounded-md group-hover:w-96 object-contain bg-white shadow-2xl group-hover:grayscale-0 transition-all duration-500"
                                />
                                <section className="absolute bottom-0 left-0 h-32 space-x-1.5 p-5 w-full bg-gradient-to-b from-transparent to-transparent group-hover:to-black">
                                    <h3 className="font-bold">
                                        {project.title}
                                    </h3>
                                    <section className="md:h-0 md:w-0 p-1 group-hover:w-full transition-all duration-500 transform-gpu delay-50">
                                        <p className="text-white text-xs line-clamp-2">
                                            {project.description}
                                        </p>
                                    </section>
                                </section>
                            </section>
                        </article>
                    ))}
                </section>
            </div>

            {/* HOW TO DO THIS */}
            <div id="hwtd" className="w-full h-full my-10 md:px-0">
                <div className="w-full flex top-border">
                    <section className="right-border p-4 md:w-32"></section>
                    <section className="bottom-border right-border  w-full -ml-8">
                        <h2 className="text-xl w-96 md:w-full px-8">
                            All Things Began With <br />
                            <span className="font-bold">How To Do This?!</span>
                        </h2>
                    </section>
                    <section className="relative bottom-border w-full">
                        <svg
                            width="72"
                            height="72"
                            viewBox="0 0 98 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                        >
                            <circle
                                cx="49"
                                cy="49"
                                r="48.5"
                                stroke="#CCF96D"
                                stroke-dasharray="2 2"
                            />
                        </svg>
                    </section>
                </div>
                <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-10 md:p-20">
                    {COMPONENT_LIST.map((comp, index) => (
                        <article
                            key={index}
                            className="p-4 md:p-4 border border-[#232323] rounded dark-gradient overflow-hidden cursor-pointer"
                            onClick={() => router.push(`/detail/component/${comp?.id}`)}
                            onKeyUp={() => console.log("first")}
                        >
                            <h1 className="text-sm md:text-md">
                                {comp?.id}
                            </h1>
                            {comp?.component}
                            <p>{comp?.title}</p>
                        </article>
                    ))}
                </section>
            </div>

            {/* THE WORK EXPERIENCE */}
            <div className="h-[1550px] relative w-full flex justify-between overflow-hidden my-10">
                <div className="w-full h-lvh -z-5">
                    <Lanyard />
                </div>
                <div className="absolute md:relative w-full h-max bg-[#080808]/40 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-5 md:p-10 space-y-5">
                    <h1 className="text-2xl w-96 md:w-full">
                        Working <span className="font-bold">Experience</span>
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores non et dicta sint inventore hic quo? Incidunt, animi eum. Quam at repellendus laudantium! Aliquid nulla eius facere quae error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi officiis consequatur ducimus. Laboriosam, placeat animi, commodi quos sint, ut voluptates nesciunt recusandae nobis dolorem modi cumque? Porro, sint dicta?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem, harum nostrum vel perspiciatis esse incidunt omnis amet, accusamus corporis dolorum fuga excepturi rem aliquam, id soluta maiores recusandae quas!Lorem
                    </p>
                    <div className="space-y-10 snap-y snap-proximity flex-nowrap overflow-x-scroll w-full">
                        {[1, 2, 3, 4].map((_item, index: number) =>
                            <section key={index} className="snap-start flex justify-between items-start space-x-10">
                                <p className="text-[#9B9B9B] w-1/3">2021 --- 2023</p>
                                <div className="h-min p-0 space-y-5">
                                    <section className="flex justify-normal items-center space-x-5 p-0 ">
                                        <Image src={'/images/feedloop.png'} alt="" width={50} height={50} />
                                        <section className="p-0">
                                            <h1 className="font-bold">Feedloop</h1>
                                            <p>Software Engineer</p>
                                        </section>
                                    </section>
                                    <p>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>

            {/* THE CONCEPTS */}
            <div id="concepts" className="w-full h-full my-10 md:px-0">
                <div className="w-full flex top-border">
                    <section className="right-border p-4 md:w-32"></section>
                    <section className="bottom-border right-border p-4 w-[320px] -ml-8">
                        <h2 className="text-xl w-96 md:w-full px-8">
                            THE CONCEPTS
                        </h2>
                    </section>
                    <section className="relative bottom-border p-4 w-full">
                        <svg
                            width="72"
                            height="72"
                            viewBox="0 0 98 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -left-9 -top-9"
                        >
                            <circle
                                cx="49"
                                cy="49"
                                r="48.5"
                                stroke="#CCF96D"
                                stroke-dasharray="2 2"
                            />
                        </svg>
                    </section>
                </div>
                <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-10 md:p-20">
                    {ARTICLE_LIST.map((article, index) => (
                        <article
                            key={index}
                            className="w-full p-3 md:p-4 border border-[#232323] border-dashed rounded dark-gradient overflow-hidden cursor-pointer"
                            onClick={() => router.push(`/detail/article/${article.id}`)}
                            onKeyUp={() => console.log("first")}
                        >
                            <h1 className="text-md font-semibold md:text-md">
                                {article?.title}
                            </h1>
                            <p className="text-sm font-light">
                                {article?.description}
                            </p>
                        </article>
                    ))}
                </section>
            </div>

            {/* CTA */}
            <div className="cta-gradient border-t-[0.2px] border-white/5 w-full h-full min-h-96 flex justify-center items-center p-5 md:p-10 pb-0">
                <section className="space-y-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Ready for a  <br /> fresh start?
                    </h2>
                    <ButtonGradient title="Get In Touch" />
                    <section className="grid grid-cols-2 md:grid-cols-3 gap-20">
                        {STATS?.map((stat) => (
                            <article
                                key={stat.title}
                                className="w-full md:w-36 rounded-lg space-y-1.5"
                            >
                                <p className="text-white text-xl font-bold">
                                    {stat.title}
                                </p>
                                <p className="text-white text-xs">
                                    {stat.description}
                                </p>
                            </article>
                        ))}
                    </section>
                </section>
            </div>
        </div>
    );
}
