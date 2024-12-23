"use client"

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./Footer";

const UploadJournal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Journal uploaded successfully!");
        setTitle("");
        setDescription("");
        setFile(null);
      } else {
        setMessage("Failed to upload journal. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
      <div className="flex justify-center w-full my-16">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-black">Upload Journal</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Journal Title
                </label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 text-black p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
                </label>
                <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 w-full border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
                ></textarea>
            </div>

            <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                Upload File
                </label>
                <input
                type="file"
                id="file"
                onChange={(e:any) => setFile(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
                Upload Journal
            </button>
            </form>

            {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UploadJournal;
