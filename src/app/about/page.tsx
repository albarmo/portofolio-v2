import Image from "next/image";
import StackIcon from "tech-stack-icons";

const Gallery = [
    {
        name: "Localoka",
        title: "Bank Rakyat Indonesia  x Pari",
        image_url: "https://cdn.linkumkm.id/uploads/library/6/5/3/4/6/65346_840x576.jpeg",
        location: "Jakarta, Indonesia",
    },
    {
        name: "Delima",
        title: "Bank Rakyat Indonesia",
        image_url: "https://stitmadani.ac.id/wp-content/uploads/2023/11/4.jpg",
        location: "Jakarta, Indonesia",
    },
    {
        name: "Laksana",
        title: "Tricora",
        image_url: "/images/people-3.png",
        location: "Jakarta, Indonesia",
    },
];

const STACK_LIST = [
    "typescript",
    "js",
    "nodejs",
    "nestjs",
    "postgresql",
    "go",
    "Redis",
    "mysql",
    "mongodb",
    "reactjs",
    "nextjs2",
    "vuejs",
    "tailwindcss",
    "storybook",
    "html5",
    "css3",
    "Git",
    "bunjs",
    "vitejs",
    "zod",
    "jira",
    "astro",
    "docusaurus",
    "figma",
    "postman",
    "eslint",
    "sass",
    "jest",
    "npm",
    "rollup",
    "babel",
    "aws",
    "ec2",
    "docker",
    "ionic",
];

const CLIENTS = [
    {
        name: "TechNova Solutions",
        industry: "Software Development",
        location: "New York, USA",
        services: ["Web Development", "Mobile App Development", "UI/UX Design"],
        image_url: "https://example.com/images/technova_logo.png",
    },
    {
        name: "EcoEnergy Innovations",
        industry: "Renewable Energy",
        location: "Berlin, Germany",
        services: ["Custom Software", "IoT Solutions", "Cloud Integration"],
        image_url: "https://example.com/images/ecoenergy_logo.png",
    },
    {
        name: "RetailX Systems",
        industry: "E-commerce",
        location: "London, UK",
        services: [
            "E-commerce Platform Development",
            "Payment Gateway Integration",
            "Data Analytics",
        ],
        image_url: "https://example.com/images/retailx_logo.png",
    },
    {
        name: "HealthTech Partners",
        industry: "Healthcare",
        location: "San Francisco, USA",
        services: [
            "Telemedicine App",
            "Data Security Solutions",
            "Healthcare Analytics",
        ],
        image_url: "https://example.com/images/healthtech_logo.png",
    },
    {
        name: "FinSecure Inc.",
        industry: "Finance",
        location: "Toronto, Canada",
        services: [
            "Blockchain Development",
            "Fintech Solutions",
            "Security Systems",
        ],
        image_url: "https://example.com/images/finsecure_logo.png",
    },
    {
        name: "AutoSmart Technologies",
        industry: "Automotive",
        location: "Tokyo, Japan",
        services: [
            "Autonomous Systems",
            "AI Solutions",
            "Software Integration",
        ],
        image_url: "https://example.com/images/autosmart_logo.png",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-[#030A17] min-h-lvh w-screen overflow-hidden">
            {/* Hero Section */}
            <div className="relative seperator-wrapper md:h-lvh flex flex-col items-center justify-center">
                <section className=" p-5 z-10 pt-28 flex flex-col justify-center items-center md:px-32 space-y-5 text-center">
                    <h1 className="text-5xl md:text-7xl font-medium shadow" >
                        Great ideas,
                        <br />{" "}
                        <span className="font-bold">deserve great execution.</span>
                    </h1>
                    <p className="text-lg md:w-1/2 leading-6 pb-5">
                        Front-end specialist with 4+ years of experience delivering responsive, high-performance apps.
                    </p>
                </section>
                <section className="p- space-x-10 z-40 flex justify-start items-start md:px-32 space-y-5 md:space-y-0 text-balance">
                    <p>
                        Im a software engineer with a deep passion for front-end development, design systems, and crafting user-centric digital experiences. With over three years of hands-on experience, I specialize in building fast, responsive, and scalable web applications that bridge the gap between beautiful design and clean, maintainable code.
                        <br />
                        <br />
                        I believe great software is more than just functionality — its about clarity, performance, and empathy. Thats why I bring a design-first mindset into my engineering work, focusing on delivering seamless user interfaces and robust architectures that scale.
                    </p>
                    <p>
                        Currently, Im building Laksana, powerful event management platform built specifically for outdoor activities and adventure competitions such as climbing, orienteering, trail runs, and community events. It empowers organizing teams to run seamless, efficient, and well-documented events — from preparation to wrap-up.
                        <br />
                        <br />
                        I dont just ship features — I craft digital experiences that deliver the future.
                    </p>
                </section>
                <div className="seperator gradient absolute bottom-1/2 left-0 right-0"></div>
            </div>

            {/* Tech Stack */}
            <div className="p-5 md:p-10 md:space-y-12 bg-[url('/images/cover/bg-cover.png')] bg-black/50 bg-contain bg-center">
                <section className="space-y-5">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Adopt a composable approach to ensure <br />  modular, scalable, and built to evolve.
                    </h2>
                    <p className="text-lg md:w-1/2 leading-6 pb-5">
                        Adopt composable architecture on your own terms — empowering you to unlock modular, efficient, and scalable solutions step by step.
                    </p>
                </section>

                {/* Stack List */}
                <section className="relative w-full h-full py-10 md:py-5 grid grid-cols-12 overflow-x-scroll hide-scrollbar gap-x-24 gap-y-8">
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

            {/* Teams */}
            <div className="p-5 md:p-10 space-y-12 bg-">
                <section className="space-y-2.5">
                    <h2 className="text-4xl md:text-5xl font-medium text-white">
                        Gallery
                    </h2>
                    <p className="text-white text-lg w-full md:w-1/2">
                        Highlights from my journey in building user-focused digital products.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-[3fr_auto_auto] gap-5">
                    {Gallery?.map((team, index) => (
                        <article
                            key={index}
                            className="relative group bg-slate-200 shadow-xl cursor-pointer first:w-full first:hover:w-full md:w-60 h-80 md:hover:w-90 transition-all duration-500 transform-gpu delay-75 rounded-lg bg-[url('/images/cover/bg-gradient-1.png')] bg-cover bg-center  overflow-hidden"
                        >
                            <Image
                                src={team.image_url}
                                alt={team.name}
                                width={500}
                                height={100}
                                className="size-full z-10 object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500 transform-gpu delay-75"
                            />
                            <section className="absolute bottom-0 left-0 h-20 p-5 pb-20 w-full bg-gradient-to-b from-transparent via-black/50 to-black hover:to-black">
                                <p className="text-white text-xl font-bold">
                                    {team.name}
                                </p>
                                <p className="text-white text-xs">
                                    <span className="font-bold">
                                        {team.title}
                                    </span>
                                    . {team.location}
                                </p>
                            </section>
                        </article>
                    ))}
                </section>
            </div>

            {/* Testimonial */}
            <div className="p-5 md:p-10 space-y-12">
                <section className="space-y-5 text-left">
                    <h2 className="text-4xl md:text-5xl">
                        What Ive Built & Where Ive Been
                        <br />
                        <span className="font-bold">Real-World</span> Experience
                    </h2>
                    <p className="text-white text-sm text-left w-full">
                        My Journey as a Software Engineer
                    </p>
                </section>

                <div className="relative flex w-full snap-x snap-proximity overflow-x-scroll md:py-0 hide-scrollbar">
                    {[
                        ...CLIENTS,
                        ...CLIENTS,
                        ...CLIENTS,
                        ...CLIENTS,
                        ...CLIENTS,
                    ].map((client, index) => (
                        <Image
                            key={index}
                            src="https://bigbuckclub.com/wp-content/uploads/2018/05/logo-dummy-4.png"
                            alt={client.name}
                            width={250}
                            height={10}
                            className="snap-center object-contain mr-3.5"
                        />
                    ))}
                    <div className="opacity-gradient absolute left-0 top-0 w-full h-full" />
                </div>
            </div>
        </main>
    );
}
