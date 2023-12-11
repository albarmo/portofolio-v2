import { SAMPLED_HTML } from "@/utils/sampled-html";
import Link from "next/link";

export default function DetailPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
            <div className="bg-black w-full md:w-11/12 lg:w-1/2 my-20 md:my-40 md:top-border">
                <section className="bottom-border">
                    <h1 className="text-4xl font-bold saira">
                        Back-End & Web Development Trends For 2024
                    </h1>
                    <p>
                        With lifelong learning, our education never stops and
                        continues to help us improve, as shown in these learning
                        quotes. Learning is a very fundamental skill.
                    </p>
                </section>
                <section>
                    <div dangerouslySetInnerHTML={{ __html: SAMPLED_HTML }} />
                    <br />
                    <p className="text-red">
                        This is smpled article from
                        <Link
                            className="mx-1 text-violet-600"
                            href="https://medium.com/ux-planet/back-end-web-development-trends-for-2024-04cc14bb43cb"
                        >
                            Medium
                        </Link>
                        By Mary Moore, copywriter at Shakuro
                    </p>
                    <br />
                    <p>For Learning Purpose Only</p>
                </section>
            </div>
        </main>
    );
}
