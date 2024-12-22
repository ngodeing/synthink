"use client";
import React from "react";

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Demo</h1>
      <div className="w-full max-w-3xl">
        <video
          className="w-full rounded-lg shadow-md"
          controls
          src="videos/sample.mp4"
          poster="videos/sample.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Demo;
