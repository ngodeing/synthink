"use client"

import React, {useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BirdImage from "../../../public/images/burung-edited.jpg";
import MedicineImage from "../../../public/images/sample-5053739_1280.jpg";
import OldPaper from "../../../public/images/bg-1.jpg";
import Footer from "./Footer";

const LearnMore = () => {
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
            className="flex flex-row justify-center lg:flex-row flex-grow md:px-10 lg:px-20 py-10 max-w-7xl mx-auto w-full">
                <div className="relative w-full flex justify-center h-[38vw]">
                    <Image
                            src={BirdImage}
                            width={1000}
                            height={300}
                            alt="gambar burung"
                            className="w-[80vw] absolute z-0"
                        />
                    <div 
                        className="relative w-[80vw] md:px-20 h-auto box-border"
                        style={{background: `linear-gradient(0deg, rgba(0,0,0,0.9) 11%, rgba(255,255,255,0) 72%)`}}
                    >
                        <h1 className="mt-[38%] text-4xl mb-5">
                            Discover World for Humanity
                        </h1>
                        <p className="text-lg">
                        Promoting Global Innovation and Collaboration through Web-based Scientific Publications3 for a Sustainable Future
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:flex-row flex-grow md:px-10 lg:px-20 md:py-10 max-w-7xl mx-auto w-full text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    <div className="border flex flex-col justify-center p-4 text-left shadow-sm hover:shadow-lg transition">
                        <h3 className="text-lg font-bold text-blue-600">Discover our science</h3>
                        <p className="text-sm mt-2">
                            <strong>Search</strong> all books, journals and book series published by Springer
                        </p>
                        <p className="text-sm mt-2">
                            <strong>Read</strong> over 10 million scientific documents on Springer Nature Link
                        </p>
                        <p className="text-sm mt-2">
                            <strong>Buy</strong> from our collection of 300,000 books in the shop
                        </p>
                    </div>
                    <div className="border text-center shadow-sm hover:shadow-lg transition">
                        <Image
                            src={OldPaper}
                            alt="old paper"
                            width={500}
                            className="h-[200px]"
                        />
                        <div className="p-4 w-full">
                            <Link href={'/submit-journal'}>
                                <h3 className="text-lg font-bold text-blue-600">Submit your article</h3>
                            </Link>
                            <p className="text-sm mt-2">
                                Your research in our journals
                            </p>
                        </div>
                        
                    </div>
                    <div className="border text-center shadow-sm hover:shadow-lg transition">
                        <Image
                            src={MedicineImage}
                            alt="sample"
                            width={500}
                            className="h-[200px]"
                        />
                        <div className="p-4 w-full">
                            <Link href={'/search-journal'}>
                                <h3 className="text-lg font-bold text-blue-600">Search some researches</h3>
                            </Link>
                            <p className="text-sm mt-2">
                                Make your work freely available
                            </p>
                        </div>
                        
                    </div>
                </div>
            </motion.div>
            <Footer/>
        </div>
    )

}

export default LearnMore;