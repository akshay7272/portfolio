import React from "react";
import "../App.css";
import gratis from "../images/gratis.jpg";
import scifi from "../images/scifi.jpg";
import cellwork from "../images/cellwork.jpg";
import urbz from "../images/urbz.jpg";
import lambandbeef from "../images/lambandbeef.jpg";
import account from "../images/account.jpg";
import todo from "../images/todo.jpg";
import weather from "../images/weather.jpg";
import portfolio from "../images/portfolio.jpg";
import netflix from "../images/netflix.jpg";
function Projects() {
  return (
    <>
      <section className="pb-9">
        <div className="mt-0">
          <div className=" mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl text-center text-white">
              <i>Contribution At Job</i>
            </h1>
            <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 pt-10 lg:mt-10 md:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
              <div className="mx-auto max-w-sm bg-neutral-100 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={lambandbeef}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Lamb and Beef
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is a Laravel multi-lingual project based on English and
                    Arabic. This Project based on lamb, beef and goat recipes
                    where you can easily find different recipes.
                  </p>
                  <p className="pt-2">
                    <b>My Contribution</b>
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> Html, CSS, SCSS, JavaScript.
                  </p>

                  <a
                    href="https://www.lambandbeef.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      loading="lazy"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mx-auto max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={cellwork}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Cellworks
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Cellworks predicts response to FDA-approved cancer
                    therapies, & provides personalized cancer therapy
                    recommendations.
                  </p>
                  <p className="pt-2">
                    <b>My Contribution</b>
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> Html, CSS, SCSS, JavaScript & JQuery.
                  </p>

                  <a
                    href="https://cellworks.life/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      loading="lazy"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mx-auto max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={scifi}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Sci-Fi
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This project(SCI-FI) & cprindia program aims to better
                    understand ‘the governance scale’ in Indian cities in tandem
                    with ‘sector-specific socio-economic scales.
                  </p>
                  <p className="pt-2">
                    <b>My Contribution</b>
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> Html, CSS, SCSS, & JavaScript.
                  </p>

                  <a
                    href="https://scifi.cprindia.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-2 text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mx-auto max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={gratis}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Gratis Books
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Gratisbooks provides you to simply donate book to another
                    user without charge or recompense.
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> Html, CSS, React, MUI. <b>Back end:</b>
                    Firebase.
                  </p>

                  <a
                    href="https://gratisbooks.gailabs.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mx-auto max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={account}
                  alt="accountability"
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Accountability Initiative
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Accountability Initiative is a research group which works on
                    strengthening transparency and accountability in governance.
                    This research also works with CPR india.
                  </p>
                  <p className="pt-2">
                    <b>My Contribution</b>
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> Html, CSS and JavaScript.
                  </p>

                  <a
                    href="https://accountabilityindia.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-2 text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mx-auto max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={urbz}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Urbz
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    urbz is an experimental action and research collective
                    specialized in participatory planning and design.
                  </p>
                  <p className="pt-2">
                    <b>My Contribution</b>
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> Html, CSS, SCSS, and JavaScript.
                  </p>

                  <a
                    href="https://urbz.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-7 text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-4xl text-center pt-7 mt-7 text-white">
              <i>Personal React Projects</i>
            </h1>
            <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 pt-10 lg:mt-10 md:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
              <div className="mx-auto max-w-sm bg-neutral-50 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={portfolio}
                  alt="accountability"
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Portfolio Website
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is my personal portfolio website where you can each
                    detail about me as well as of my all projects. This project
                    built using react js and tailwind css.
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> React js, JSX & Tailwind CSS.
                  </p>

                  <a
                    href="https://akshay-port-folio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-2 text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mx-auto max-w-sm bg-neutral-100 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={netflix}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Netflix UI Clone
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is a React js Netflix clone with react-bootstrap.
                    Simply designed a front-end using tmdb api. Project is
                    created using react js and react-bootstrap. Fetched data
                    from TMDB.
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> React js, JSX & React-Bootstrap.
                  </p>

                  <a
                    href="https://react-netflix-clone-bootstrap.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mx-auto max-w-sm bg-neutral-100 border border-gray-200 rounded-lg shadow ">
                <img
                  className="rounded-t-lg"
                  src={todo}
                  alt=""
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Todo Application
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is a React js project with ant design to set your todo
                    and perform different tasks like updating, deleting,
                    sorting, filtering and searching etc.
                  </p>
                  <p className="pt-2">
                    <b>Front end:</b> React js, JSX & AntDesign.
                  </p>

                  <a
                    href="https://ant-design-react-todo-app.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Website
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
