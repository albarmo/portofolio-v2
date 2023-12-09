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
            className={`z-50 fixed top-0 right-0 h-screen w-full md:w-10/12 lg:w-1/2 xl:w-1/3 overflow-y-auto transition-transform bg-[#000000] flex justify-between items-start overflow-x-hidden
            ${isOpen ? "" : "translate-x-full"} `}
            tabIndex={-1}
            aria-labelledby="drawer-navigation-label"
        >
            <div
                id="navbar-top-border"
                className="overflow-y-auto w-full mt-14 lg:mt-0"
            >
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
                            <div className="w-full">
                                {index <= 1 ? (
                                    menu?.body?.map((item: any) => (
                                        <section
                                            key={item.id}
                                            className="group flex cursor-pointer p-x-5 w-full"
                                        >
                                            <div className="text-2xl h-max md:text-4xl font-extrabold uppercase z-10 hover:text-black hover:bg-[#CCF96D] hover:mr-3 p-2">
                                                <CyberPunkText
                                                    text={item.title}
                                                    duration={50}
                                                />
                                            </div>
                                            <section className="hidden group-hover:block text-[8px] text-[#CCF96D] font-extralight uppercase">
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
            <div
                id="navbar-action"
                className="w-16 flex justify-center items-start h-screen"
            >
                <button
                    id="navbar-menubar"
                    type="button"
                    onClick={() => close()}
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className=" w-full h-14 flex justify-center items-center hover:bg-red-800"
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
            </div>
        </div>
    );
};

export default DrawerComponent;
