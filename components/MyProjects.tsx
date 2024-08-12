import React from "react";

function MyProjects() {
  return (
    <>
      {" "}
      <section className="" id="skills">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 border border-stone-600 m-auto p-10 text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Skills
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Combining frontend and backend expertise, I build scalable,
              user-focused web applications with technical precision and design
              insight.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="block rounded-lg shadow-secondary-1 dark:bg-surface-dark">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img className="rounded-t-lg" src="/devpen.png" alt="" />
                <a href="https://dev-pen.vercel.app/">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  DevPen (Code Editor)
                </h5>
                <p className="mb-4 text-base">
                  Developed an online code editing platform allowing developers
                  to write and save their projects with a responsive and
                  user-friendly interface. Implemented features such as user
                  authentication, and real-time code editing and deployed the
                  application on Vercel
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Button
                </button>
              </div>
            </div>
            ;
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
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Finance
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
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
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProjects;
