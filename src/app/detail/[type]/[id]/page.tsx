'use client'
import { AOO1 } from "@/utils/sampled-html";
import { COMPONENT_LIST } from "@/utils/hwtd";
import { ARTICLE_LIST } from "@/utils/sampled-html";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPage({ params }: { params: { type: string,id:string } }) {
    const [data,setData] = useState<any>(null)
    
    useEffect(() => {
        if(!params.type || !params.id) return
        if (params.type === 'component') {
            const filter = COMPONENT_LIST.filter((comp) => comp.id === params.id)
            filter &&  setData(filter[0])
        } else {
            const filter = ARTICLE_LIST.filter((article) => article.id === params.id)
            filter &&  setData(filter[0])
        }
    },[params])


    return (
        <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden">
            <div className="bg-black w-full md:w-11/12 lg:w-1/2 my-20 md:my-40 md:top-border">
                <section className="bottom-border">
                    <h1 className="text-4xl font-bold saira">
                      {data?.title}
                    </h1>
                    <p>
                       {data?.description}
                    </p>
                </section>
                <section>
                    <div style={{color:'white'}} dangerouslySetInnerHTML={{ __html: data?.HtmlContent }} />
                </section>
            </div>
        </main>
    );
}
