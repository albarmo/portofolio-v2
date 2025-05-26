import Image from "next/image";
import StackIcon from "tech-stack-icons";

const TEAMS = [
    {
        name: "Prasetya Kusumo",
        title: "Co-Founder / CEO",
        image_url: "/images/people-1.png",
        location: "Jakarta, Indonesia",
    },
    {
        name: "Bambang Wacana",
        title: "Co-Founder / CTO",
        image_url: "/images/people-2.png",
        location: "Jakarta, Indonesia",
    },
    {
        name: "Adinata Dongoran",
        title: "Business Relations",
        image_url: "/images/people-3.png",
        location: "Jakarta, Indonesia",
    },
    {
        name: "Jefri Pranowo",
        title: "Front-end Developer",
        image_url: "/images/people-4.png",
        location: "Jakarta, Indonesia",
    },
];

const STATS = [
    {
        title: "ISO302",
        description: "Web Certification",
    },
    {
        title: "250+",
        description: "Projects",
    },
    {
        title: "80+",
        description: "Clients",
    },
];

const POINTS = [
    {
        title: "Two-way synchronization",
        description:
            "Integrate your task tracker with GitHub to sync changes instantly.",
    },
    {
        title: "Private tasks",
        description:
            "Integration and management of multiple data repositories effectively.",
    },
    {
        title: "Fast Development",
        description:
            "Integration and management of multiple data repositories effectively.",
    },
];

const FEATURES = [
    {
        title: "Flexibility and Scalability",
        description:
            "Build adaptable, modular systems that grow with your needs.",
    },
    {
        title: "Faster Time-to-Market",
        description:
            "Rapidly develop and deploy features using reusable components.",
    },
    {
        title: "Cost Efficiency",
        description:
            "Lower costs by reusing components and optimizing resources.",
    },
    {
        title: "Future-Proofing",
        description:
            "Easily integrate new technologies and updates without disruption.",
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
                        We love creators
                        <br />{" "}
                        <span className="font-bold">on time-every time.</span>
                    </h1>
                    <p className="text-lg md:w-1/2 leading-6 pb-5">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat.
                    </p>
                </section>
                <section className="p-5 space-x-10 z-40 flex justify-start items-start md:px-32 space-y-5 text-balance">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                        eget risus enim. Mattis mauris semper sed amet vitae sed
                        turpis id. Id dolor praesent donec est. Odio penatibus
                        risus viverra tellus varius sit neque erat velit.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                        eget risus enim. Mattis mauris semper sed amet vitae sed
                        turpis id.
                        <br />
                        <br />
                        Et vitae blandit facilisi magna lacus commodo. Vitae
                        sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in
                        vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas.
                    </p>
                    <p>
                        Erat pellentesque dictumst ligula porttitor risus eget
                        et eget. Ultricies tellus felis id dignissim eget. Est
                        augue maecenas risus nulla ultrices congue nunc tortor.
                        Enim et nesciunt doloremque nesciunt voluptate.
                        <br />
                        <br />
                        Et vitae blandit facilisi magna lacus commodo. Vitae
                        sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in
                        vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                        integer orci.
                    </p>
                </section>
                <div className="seperator gradient absolute bottom-1/2 left-0 right-0"></div>
            </div>

            <div className="w-lvw h-full min-h-max flex justify-center items-center p-10">
                <section className="grid grid-cols-2 md:grid-cols-6 gap-20">
                    {[...STATS, ...STATS]?.map((stat, index) => (
                        <article
                            key={index}
                            className="w-full md:w-36  space-y-1.5 border-l-2 pl-5 border-white/20"
                        >
                            <p className="text-white text-2xl font-bold">
                                {stat.title}
                            </p>
                            <p className="text-white text-md">
                                {stat.description}
                            </p>
                        </article>
                    ))}
                </section>
            </div>

            {/* Features */}
            <div className="flex md:hidden justify-between items-start flex-col md:flex-row overflow-hidden p-5  bg-black">
                <section className="grid grid-cols-2 gap-x-10 md:gap-x-40">
                    {POINTS?.map((feature) => (
                        <article
                            key={feature.title}
                            className="first:col-span-2 nth-[1]:w-full first:w-full first:h-32 h-40 rounded-lg aspect-square space-y-1.5"
                        >
                            <h2 className="text-white text-xl font-bold">
                                {feature.title}
                            </h2>
                            <p className="text-white text-xs">
                                From development to deployment, we ensure
                                efficiency, scalability, and excellence in every
                                project
                            </p>
                        </article>
                    ))}
                </section>
            </div>

            {/* AW */}
            <div className="p-5 md:p-10 md:space-y-12 bg-[url('/images/cover/bg-cover.png')] bg-black/50 bg-contain bg-center">
                <section className="space-y-5">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Our values : Adopt composable architecture <br /> for a
                        future-proof, adaptable system.
                    </h2>
                    <p className="text-lg md:w-1/2 leading-6 pb-5">
                        Embrace composable architecture at your own pace,
                        unlocking modular and efficient solutions.
                    </p>
                </section>

                <div className="flex justify-between items-start flex-col md:flex-row overflow-hidden md:p-5 pr-0 bg-black">
                    {/* Features */}
                    <section className="w-full grid md:grid-cols-4 gap-5 md:gap-x-40">
                        {FEATURES?.map((feature, index) => (
                            <article
                                key={feature.title}
                                className="md:h-40 rounded-lg md:aspect-square space-y-1.5"
                            >
                                <Image
                                    src={`/icons/icon-${index + 1}.svg`}
                                    alt="Localoka"
                                    width={100}
                                    height={100}
                                    className="size-8"
                                />
                                <p className="text-white text-xl font-bold">
                                    {feature.title}
                                </p>
                                <p className="text-white text-xs line-clamp-3">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </section>
                </div>
                <h2 className="text-4xl md:text-3xl font-bold">Technology</h2>
                {/* Stack List */}
                <section className="relative w-full h-full py-10 md:py-0 grid grid-cols-12 overflow-x-scroll hide-scrollbar gap-x-24 gap-y-8">
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
                        Our team
                    </h2>
                    <p className="text-white text-lg w-full md:w-1/2">
                        We’re a dynamic group of individuals who are passionate
                        about what we do and dedicated to delivering the best
                        results for our clients.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-5">
                    {TEAMS?.map((team, index) => (
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
                            <section className="absolute bottom-0 left-0 h-20 p-5 w-full bg-gradient-to-b from-transparent via-black/50 to-black hover:to-black">
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
                        Partners rate us{" "}
                        <span className="font-bold">4.8/5</span> <br /> for
                        custom software development
                    </h2>
                    <p className="text-white text-sm text-left w-full">
                        Based on impartial reviews verified by Clutch. Most
                        partners stay over 3 years.
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
