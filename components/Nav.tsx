"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6"; // Import the icons for GitHub and X.com

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#0000]/50 bg-[#00000017] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo and Title */}
        <a href="/" className="flex items-center">
          <Image
            src="/sunil.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden sm:block text-gray-300">
            Sunil Kumar Saini
          </span>
        </a>

        {/* Toggle Button for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleNav}
            className="text-gray-300 focus:outline-none"
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            navOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center justify-between md:w-[500px] h-full md:mr-20`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto border border-[#3b3b3b61] bg-[#2020205e] md:mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer py-2 md:py-0">
              About me
            </a>
            <a href="#skills" className="cursor-pointer py-2 md:py-0">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer py-2 md:py-0">
              Projects
            </a>
            <a
              href="/resume.pdf"
              download="Sunil_Kumar_Resume.pdf"
              className="px-4 text-white rounded hover:text-gray-400"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex flex-row gap-5">
          <a
            href="https://github.com/sunilsaini87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://x.com/sunilsaini_x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/sunil-kumar-saini-0349b3208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>

      {navOpen && (
        <div className="flex flex-row gap-5 mt-4 md:hidden justify-center">
          <a
            href="https://github.com/sunilsaini87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://x.com/sunilsaini_x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/sunil-kumar-saini-0349b3208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-gray-300 hover:text-white" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
