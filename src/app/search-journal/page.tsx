"use client"

import React, {useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import Footer from "./Footer";

const SearchJournal = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="bg-white h-screen flex flex-col">
            <div className="flex items-center justify-between px-6 lg:px-20 py-4 max-w-7xl mx-auto w-full">
                <Link href="/">
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:text-2xl text-lg font-bold text-gray-800"
                    >
                    SynThink
                    </motion.div>
                </Link>
                
                <div className="hidden lg:flex space-x-6">
                    {[
                        { name: "Demos", path: "/demo" },
                        { name: "About", path: "/about" },
                        { name: "Blog", path: "/blog" },
                        { name: "Contact", path: "/contact" },
                    ].map((item, index) => (
                        <motion.a
                        key={item.name}
                        href={item.path}
                        className="text-gray-600 hover:text-gray-900"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                        {item.name}
                        </motion.a>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                    </button>
                </div>
            </div>
    
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden flex flex-col px-6 py-4 space-y-4 bg-white shadow-md"
                >
                    {[
                    { name: "Demos", path: "/demo" },
                    { name: "About", path: "/about" },
                    { name: "Blog", path: "/blog" },
                    { name: "Contact", path: "/contact" },
                    ].map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        {item.name}
                    </a>
                    ))}
                </motion.div>
            )}

            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-row justify-center lg:flex-row mx-auto w-full">
                 <div className="flex flex-col items-center bg-gray-100 p-6 w-full ">
                    <p className="text-sm text-gray-700 mb-4">Find articles with these terms</p>
                        <div className="flex items-center w-full max-w-md border rounded">
                            <input
                            type="text"
                            placeholder="Search the researches ..."
                            className="flex-grow px-4 py-2 text-sm text-black border-none focus:outline-none"
                            />
                            <button className="bg-blue-600 p-3 flex items-center justify-center text-white hover:bg-blue-700 transition">
                            <svg 
                            className="h-4 w-4" 
                            aria-labelledby="title desc" 
                            role="img" 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                                <title id="title">
                                    Search Icon
                                </title>
                                <desc id="desc">
                                    A magnifying glass icon
                                </desc>
                                <g 
                                className="search-path" 
                                fill="none" 
                                stroke="#FFF"
                                strokeWidth="2">
                                    <path 
                                    strokeLinecap="square" 
                                    d="M18.5 18.3l-5.4-5.4"
                                    />
                                    <circle cx="8" cy="8" r="7"/>
                                </g>
                            </svg>
                            </button>
                        </div>
                    </div>
            </motion.div>
            {/* <Footer/> */}
        </div>
    )

}

export default SearchJournal;