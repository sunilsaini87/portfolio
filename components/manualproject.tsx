"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const MyProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white text-center">Recent Projects</h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {/* Project 1 */}
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer title="/ui.earth.com" href="/ui.earth.com">
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/11.jpg" alt="bgimg" />
              </div>
              <img
                src="/devpen.png"
                alt="DevPen project cover"
                className="z-10 absolute bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              DevPen (Code Editor)
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{ color: "#BEC1DD", margin: "1vh 0" }}
            >
              Explore the wonders of our solar system with this captivating 3D
              simulation of the planets using Three.js.
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-2px)" }}
                >
                  <img src="/re.svg" alt="React" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-7px)" }}
                >
                  <img src="/tail.svg" alt="Tailwind CSS" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-12px)" }}
                >
                  <img src="/ts.svg" alt="TypeScript" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-17px)" }}
                >
                  <img src="/three.svg" alt="Three.js" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-22px)" }}
                >
                  <img src="/fm.svg" alt="Framer Motion" className="p-2" />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <a
                  href="/ui.earth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-800">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Project 2 */}
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer title="/ui.yoom.com" href="/ui.yoom.com">
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/11.jpg" alt="bgimg" />
              </div>
              <img
                src="/walkinhire.png"
                alt="Yoom project cover"
                className="z-10 absolute bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              Yoom - Video Conferencing App
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{ color: "#BEC1DD", margin: "1vh 0" }}
            >
              Simplify your video conferencing experience with Yoom. Seamlessly
              connect with colleagues and friends.
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-2px)" }}
                >
                  <img src="/next.svg" alt="Next.js" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-7px)" }}
                >
                  <img src="/tail.svg" alt="Tailwind CSS" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-12px)" }}
                >
                  <img src="/ts.svg" alt="TypeScript" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-17px)" }}
                >
                  <img src="/stream.svg" alt="Stream" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-22px)" }}
                >
                  <img src="/c.svg" alt="C" className="p-2" />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <a
                  href="/ui.yoom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-800">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Project 3 */}
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer title="/ui.aiimg.com" href="/ui.aiimg.com">
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/11.jpg" alt="bgimg" />
              </div>
              <img
                src="/quickchat.png"
                alt="AI Image SaaS project cover"
                className="z-10 absolute bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              AI Image SaaS - Canva Application
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{ color: "#BEC1DD", margin: "1vh 0" }}
            >
              A REAL Software-as-a-Service app with AI features and a payments
              and credits system using the latest tech stack.
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-2px)" }}
                >
                  <img src="/re.svg" alt="React" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-7px)" }}
                >
                  <img src="/tail.svg" alt="Tailwind CSS" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-12px)" }}
                >
                  <img src="/ts.svg" alt="TypeScript" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-17px)" }}
                >
                  <img src="/three.svg" alt="Three.js" className="p-2" />
                </div>
                <div
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: "translateX(-22px)" }}
                >
                  <img src="/c.svg" alt="C" className="p-2" />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <a
                  href="/ui.aiimg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-800">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
