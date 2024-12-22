"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  const profiles = [
    { name: "Taufik Nurrohman", role: "Ketua Tim", img: "/images/taufik.jpg" },
    { name: "Hadid Ramadhan", role: "Anggota", img: "/images/hadid.jpeg" },
    { name: "Farrel Arkeysha K.", role: "Anggota", img: "/images/farrel.jpeg" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-5 bg-white px-6">
      <h1 className="md:text-4xl text-2xl font-bold text-gray-800 mb-6">About</h1>
      <p className="text-gray-600 md:text-lg text-sm text-center max-w-3xl mb-12">
        SynThink is a decentralized platform that secures research files using Web 3 technology. 
        Our mission is to empower researchers and students to protect their work with advanced and secure solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {profiles.map((profile) => (
          <div key={profile.name} className="flex flex-col items-center">
            <Image
              src={profile.img}
              alt={profile.name}
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">{profile.name}</h3>
            <p className="text-sm text-gray-600">{profile.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
