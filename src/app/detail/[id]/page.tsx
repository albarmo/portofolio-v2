import { SAMPLED_HTML } from "@/utils/sampled-html";

export default function DetailPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
            <div className="bg-black w-full md:w-11/12 lg:w-1/2 my-20 md:my-40 md:top-border">
                <section className="bottom-border">
                    <h1 className="text-4xl font-bold saira">
                       Running local REACT Application Development Mode On Your Device
                    </h1>
                    <p>
                       Tips for tesing any device on local devlopment mode
                    </p>
                </section>
                <section>
                    <div style={{color:'white'}} dangerouslySetInnerHTML={{ __html: SAMPLED_HTML }} />
                </section>
            </div>
        </main>
    );
}
