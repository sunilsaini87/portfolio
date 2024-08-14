import React from "react";
import Image from "next/image";

function MyProjects() {
  return (
    <section className="" id="projects">
      <div className="max-w-screen-md mb-8 lg:mb-16 m-auto p-10 text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="text-gray-500 sm:text-sm dark:text-gray-400">
          Combining frontend and backend expertise, I build scalable,
          user-focused web applications with technical precision and design
          insight.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 p-6">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src="/devpen.png"
              alt="DevPen Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              DevPen
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Project of code editor. The place is close to Barceloneta Beach
              and bus stop just 2 min by walk and near to Naviglio where you can
              enjoy the main night life in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://codepen.com"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              To Live Link
            </a>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src="/walkinhire.png"
              alt="Project 2 Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Project Two
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Description for the second project.
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://example.com"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              To Live Link
            </a>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <Image
              src="/quickchat.png"
              alt="Project 3 Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Project Three
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Description for the third project.
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://example.com"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              To Live Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
