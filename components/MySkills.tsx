import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="" id="skills">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16 border border-stone-600 m-auto p-10 text-center">
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
            <Image
              src="/js.png"
              alt="JavaScript"
              width={60}
              height={60}
              className="rounded-lg bg-gray-100 dark:bg-gray-800 p-2 shadow-md"
            />
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Legal</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Business Automation
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Enterprise Design
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Operations
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
