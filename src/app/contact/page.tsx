"use client";
import React from "react";

const Contact = () => {
  return (
    <footer className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600 text-lg mb-6">Get in touch with us!</p>
        <div className="space-y-2">
          <p className="text-gray-800">
            Email: <a href="mailto:onlytaufik47@gmail.com" className="text-red-500 hover:underline">onlytaufik47@gmail.com</a>
          </p>
          <p className="text-gray-800">
            GitHub:{" "}
            <a
              href="https://github.com/ngodeing/synthink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              SynThink
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
