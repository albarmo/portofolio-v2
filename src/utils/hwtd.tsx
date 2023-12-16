import CyberPunkText from "@/components/Effects/CyberPunkText";
export const COMPONENT_LIST = [
    {
        id: "COMP-001",
        title: "CyberPunkText",
        component: <CyberPunkText text="Albarms" duration={30} />,
        HtmlContent: `<p><span style="font-size:18pt"><span style="font-family:Oswald,sans-serif"><span style="color:#000000"><strong>CyberPunkText Effect</strong></span></span></span></p>
<p>Here its the source code on ReactJS version, happy coding&nbsp;😽</p>
<pre>
<code class="language-javascript">import { useState, useEffect } from "react";
function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const CyberPunkText: React.FC&lt;{ text: string; duration: number }&gt; = ({
    text,
    duration,
}) =&gt; {
    const [result, setResult] = useState&lt;string&gt;("");
    const ALPABETH = "ABCDEFGHIJKLMNOPQRSTUVWZYZ!@$^#*$)";

    const generateRandomText = (text: string) =&gt; {
        if (!text) return "*******";

        let interval: any = null;
        let iteration = 0;
        clearInterval(interval);

        const stringValue = text;
        const splitedTextValue = stringValue.split("");
        let cyberTextResult = "";

        interval = setInterval(() =&gt; {
            cyberTextResult = splitedTextValue
                .map((char: string, index: number) =&gt; {
                    if (index &lt; iteration) {
                        return stringValue[index];
                    }
                    return ALPABETH[
                        randomIntFromInterval(0, ALPABETH.length - 1)
                    ];
                })
                .join("");
            setResult(cyberTextResult);
            if (iteration &gt;= stringValue.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, duration);
    };

    useEffect(() =&gt; {
        if (!text) return;
        setResult(text);
        generateRandomText(text);
    }, [text]);

    return (
        &lt;div&gt;
            &lt;h1
                id="cyberpunk-text"
                className="spaceMono w-max font-bold text-xl md:text-2xl uppercase"
                onMouseEnter={() =&gt; generateRandomText(text)}
                onMouseLeave={() =&gt; setResult(text)}
            &gt;
                {result || "******"}
            &lt;/h1&gt;
        &lt;/div&gt;
    );
};

export default CyberPunkText;
</code></pre>

<p>&nbsp;</p>
`
    }
]