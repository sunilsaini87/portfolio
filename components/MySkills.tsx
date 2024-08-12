import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="" id="skills">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16 m-auto p-10 text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Skills
          </h2>
          <p className="text-gray-500 sm:text-sm dark:text-gray-400">
            Combining frontend and backend expertise, I build scalable,
            user-focused web applications with technical precision and design
            insight.
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-12 md:space-y-0 border border-stone-600 m-auto p-10">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Programming Languages:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/js.svg"
                alt="JavaScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/cpp.svg"
                alt="C++"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/sql.svg"
                alt="SQL"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/typescript.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Frameworks/Libraries:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/express.svg"
                alt="JavaScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md bg-slate-200"
              />
              <Image
                src="/css-3.svg"
                alt="C++"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/html.svg"
                alt="SQL"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/tailwindcss.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/nodejs.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/bootstrap.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/nextjs.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Databases:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/mysql.svg"
                alt="JavaScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md bg-slate-200"
              />
              <Image
                src="/postgresql.svg"
                alt="C++"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/redis.svg"
                alt="SQL"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/mongodb.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md bg-slate-200"
              />
              <Image
                src="/prisma.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md bg-slate-200"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Developer Tools:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Image
                src="/git.svg"
                alt="JavaScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/github.svg"
                alt="C++"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/docker.svg"
                alt="C++"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/postman.svg"
                alt="C++"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/vs-code.svg"
                alt="SQL"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/firebase.svg"
                alt="SQL"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md"
              />
              <Image
                src="/socketio.svg"
                alt="SQL"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md bg-slate-200"
              />
              <Image
                src="/vercel.svg"
                alt="TypeScript"
                width={60}
                height={60}
                className="rounded-lg p-2 shadow-md bg-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
