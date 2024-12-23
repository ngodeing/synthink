"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-2xl text-lg font-bold text-gray-800"
        >
          SynThink
        </motion.div>
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

      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow px-6 lg:px-20 py-12 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-red-500 font-semibold text-xs lg:text-sm uppercase mb-4">
            Decentralizing research files
          </h4>
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Protect your research <br /> with secure Web 3 technology
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mb-8">
            We provide decentralized solutions to secure your journal and
            research files. Empower your work with the power of Web 3.
          </p>
          <Link href="/learn-more">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Learn More
            </motion.button>
          </Link>
          
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-end mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/ilustrasi.png"
            alt="Illustration"
            width={400}
            height={400}
            className="w-full lg:max-w-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
