import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Import the icons for GitHub and X.com

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-start justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center mb-4">
            <div className="font-bold text-lg">Community</div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <FaYoutube />
              <span className="text-base ml-2">YouTube</span>
            </a>
            <a
              href="https://github.com/sunilsaini87"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-base ml-2">GitHub</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-base ml-2">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center mb-4">
            <div className="font-bold text-lg">Social Media</div>
            <a
              href="https://x.com/sunilsaini_x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <FaXTwitter />
              <span className="text-base ml-2"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/sunil-kumar-saini-0349b3208/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-base ml-2">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center mb-4">
            <div className="font-bold text-lg">About</div>
            <p className="flex flex-row items-center my-3 cursor-pointer">
              <span className="text-base">sunilkumarsaini6363@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} Sunil Kumar Saini. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
