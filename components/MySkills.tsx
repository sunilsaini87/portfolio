import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              <Link href="https://www.javascript.com" target="_blank">
                <Image
                  src="/js.svg"
                  alt="JavaScript"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.cplusplus.com" target="_blank">
                <Image
                  src="/cpp.svg"
                  alt="C++"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.sql.org" target="_blank">
                <Image
                  src="/sql.svg"
                  alt="SQL"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.typescriptlang.org" target="_blank">
                <Image
                  src="/typescript.svg"
                  alt="TypeScript"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Frameworks/Libraries:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="https://expressjs.com" target="_blank">
                <Image
                  src="/express.svg"
                  alt="Express.js"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md bg-slate-200"
                />
              </Link>
              <Link href="https://www.w3.org/Style/CSS/" target="_blank">
                <Image
                  src="/css-3.svg"
                  alt="CSS"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://html.spec.whatwg.org/" target="_blank">
                <Image
                  src="/html.svg"
                  alt="HTML"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://tailwindcss.com" target="_blank">
                <Image
                  src="/tailwindcss.svg"
                  alt="Tailwind CSS"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://nodejs.org" target="_blank">
                <Image
                  src="/nodejs.svg"
                  alt="Node.js"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://getbootstrap.com" target="_blank">
                <Image
                  src="/bootstrap.svg"
                  alt="Bootstrap"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://nextjs.org" target="_blank">
                <Image
                  src="/nextjs.svg"
                  alt="Next.js"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Databases:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="https://www.mysql.com" target="_blank">
                <Image
                  src="/mysql.svg"
                  alt="MySQL"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md bg-slate-200"
                />
              </Link>
              <Link href="https://www.postgresql.org" target="_blank">
                <Image
                  src="/postgresql.svg"
                  alt="PostgreSQL"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://redis.io" target="_blank">
                <Image
                  src="/redis.svg"
                  alt="Redis"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.mongodb.com" target="_blank">
                <Image
                  src="/mongodb.svg"
                  alt="MongoDB"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md bg-slate-200"
                />
              </Link>
              <Link href="https://www.prisma.io" target="_blank">
                <Image
                  src="/prisma.svg"
                  alt="Prisma"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md bg-slate-200"
                />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Developer Tools:
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="https://git-scm.com" target="_blank">
                <Image
                  src="/git.svg"
                  alt="Git"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://github.com" target="_blank">
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.docker.com" target="_blank">
                <Image
                  src="/docker.svg"
                  alt="Docker"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.postman.com" target="_blank">
                <Image
                  src="/postman.svg"
                  alt="Postman"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://code.visualstudio.com" target="_blank">
                <Image
                  src="/vs-code.svg"
                  alt="VS Code"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://firebase.google.com" target="_blank">
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://socket.io" target="_blank">
                <Image
                  src="/socketio.svg"
                  alt="Socket.IO"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md bg-slate-200"
                />
              </Link>
              <Link href="https://archlinux.org" target="_blank">
                <Image
                  src="/archlinux.svg"
                  alt="Arch Linux"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://www.linux.org" target="_blank">
                <Image
                  src="/linux.svg"
                  alt="Linux"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md"
                />
              </Link>
              <Link href="https://vercel.com" target="_blank">
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  width={60}
                  height={60}
                  className="rounded-lg p-2 shadow-md bg-slate-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
