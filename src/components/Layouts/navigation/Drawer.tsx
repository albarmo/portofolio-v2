import CyberPunkText from "@/components/Effects/CyberPunkText";
import { MENU_DRAWER } from "@/utils/data";
import React from "react";

interface IPropsDrawer {
    isOpen: boolean;
    close: () => void;
    active: string;
    setCurrentSection: (ref: string) => void;
}

const DrawerComponent: React.FC<IPropsDrawer> = ({
    isOpen,
    close,
    active,
    setCurrentSection,
}) => {
    return (
        <div
            id="drawer-navigation"
            className={`z-50 fixed top-0 right-0 h-screen w-full md:w-1/2 overflow-y-auto transition-transform bg-[#000000] 
            ${isOpen ? "" : "translate-x-full"} `}
            tabIndex={-1}
            aria-labelledby="drawer-navigation-label"
        >
            <svg
                className="absolute top-0 right-12 h-screen"
                width="2"
                height="853"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1.00004 0L0.999962 853" stroke="#272727" />
            </svg>
            <button
                id="navbar-menubar"
                type="button"
                onClick={() => close()}
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
            <div className="py-4 overflow-y-auto mt-10">
                <ul className="">
                    {MENU_DRAWER.map((menu: any, index: number) => (
                        <li
                            key={menu?.id}
                            className="text-left flex w-full justify-start items-start space-x-5 md:space-x-20 pr-20 min-h-max px-5 py-8"
                            id="navbar-menubar"
                        >
                            <section className="flex items-start justify-start space-x-4">
                                <svg
                                    width="6"
                                    height="6"
                                    viewBox="0 0 6 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="6" height="6" fill="#CCF96D" />
                                </svg>
                                <p className="ml-3 -mt-2">
                                    {menu.sectionTitle}
                                </p>
                            </section>
                            <div>
                                {index <= 1 ? (
                                    menu?.body?.map((item: any) => (
                                        <section
                                            key={item.id}
                                            className="flex space-y-5 cursor-pointer"
                                        >
                                            <div className="text-2xl md:text-4xl font-extrabold uppercase z-10 hover:text-black hover:bg-[#CCF96D] hover:mr-3 p-2">
                                                <CyberPunkText
                                                    text={item.title}
                                                    duration={50}
                                                />
                                            </div>
                                            <section className="text-[8px] text-[#CCF96D] font-extralight uppercase">
                                                Section
                                                <br /> {item.id}
                                            </section>
                                        </section>
                                    ))
                                ) : (
                                    <p>{menu?.body}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DrawerComponent;
