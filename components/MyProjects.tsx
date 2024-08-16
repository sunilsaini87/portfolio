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
              Developed an online code editing platform allowing developers to
              write and save their projects with a responsive and user-friendly
              interface. Implemented features such as user authentication, and
              real-time code editing and deployed the application on Vercel
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://dev-pen.vercel.app/"
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
              WalkInHire (Job Portal Platform)
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Designed and maintained a job portal platform to facilitate
              walk-in interviews. • Implemented features for job listings,
              employer dashboards, job seeker profiles and authentication•
              Designed and developed responsive user interfaces using React,
              Tailwind CSS and framer-motion.
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://walk-in-hire.netlify.app/"
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
              QuickChat (Chat App)
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Developed a full stack real-time chat application enabling users
              to communicate instantly via multiple chat rooms and direct
              messages. • Designed the front end using React and Material UI,
              ensuring a responsive and user-friendly interface. • Developed
              backend services with Node.js and Express to handle user
              authentication, messaging, and real-time updates via Socket.io.
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://quick-chat-frontend.vercel.app/"
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
