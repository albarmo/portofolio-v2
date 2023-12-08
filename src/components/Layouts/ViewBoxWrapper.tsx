const ViewBoxWrapper = () => {
    return (
        <>
            <svg
                className="absolute top-10 left-0 w-full"
                height="1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="-4.37114e-08"
                    y1="0.500122"
                    x2="1440"
                    y2="0.499996"
                    stroke="#272727"
                />
            </svg>
            <svg
                className="absolute top-0 left-10 h-full"
                width="2"
                height="853"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1.00004 0L0.999962 853" stroke="#272727" />
            </svg>
            <svg
                className="absolute bottom-10 left-0 w-full"
                height="1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="-4.37114e-08"
                    y1="0.500122"
                    x2="1440"
                    y2="0.499996"
                    stroke="#272727"
                />
            </svg>
            <svg
                className="absolute top-0 right-10 h-full"
                width="2"
                height="853"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1.00004 0L0.999962 853" stroke="#272727" />
            </svg>
        </>
    );
};

export default ViewBoxWrapper;
