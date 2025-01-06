import React from "react";
import about from "../images/about.png";
import css from "../images/css.svg.jpg";
import html from "../images/html.svg.jpg";
import js from "../images/js.svg.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.svg";
import sass from "../images/sass.webp";
import jquery from "../images/jquery.webp";
import react from "../images/react.svg.png";
import github from "../images/github.svg";
import git from "../images/git.png";
import wordpress from "../images/wordpress.png";
import drupal from "../images/drupal.png";
import material from "../images/material.svg";
function About_us() {
  return (
    <section>
      <div className=" mx-auto mt-0 lg:mt-20 m-20 rounded-xl shadow-2xl overflow-hidden max-w-3xl md:max-w-7xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-2xl text-neutral-800 font-semibold">
              About Me
            </div>

            <p className="mt-2 pt-3 text-white text-lg text-justify">
              I'm a self-taught Front End developer from India. I build websites
              with a focus on providing the experience for everyone using them
              and responsiveness. Curious to learn more about developing
              scalable distribution systems, love problem solving, and care
              about writing and maintainable code. A responsive design makes
              your website accessible to all users, regardless of their devices.
            </p>
            <div>
              <h1 className="mt-2 pt-3 uppercase tracking-wide text-2xl text-neutral-800 font-semibold">
                Skills
              </h1>
              <div className="tech flex gap-6 flex-wrap lg:gap-20">
                <li className="list-none pt-6">
                  <a href="https://en.wikipedia.org/wiki/HTML" target="blank"><img
                    src={html}
                    height="55px"
                    width="55px"
                    alt=""
                    loading="lazy"
                  />
                  </a>
                </li>
                <li className="list-none pt-6 pl-1">
                 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank"> <img
                    src={css}
                    height="40px"
                    width="40px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-6">
                <a href="https://javascript.info/" target="blank"> <img
                    src={js}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  />
                  </a>
                </li>
                <li className="list-none pt-6">
                 <a href="https://wordpress.org/" target="blank"> <img
                    src={wordpress}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-6">
                 <a href="https://new.drupal.org/" target="blank"> <img
                    src={drupal}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-7">
                 <a href="https://react.dev/"> <img
                    src={react}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-7">
                 <a href="https://mui.com/material-ui/" target="blank"> <img
                    src={material}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-6">
                  <a href="https://jquery.com/" target="blank"><img
                    src={jquery}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-6">
                 <a href="https://github.com/" target="blank"> <img
                    src={github}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-6 lg:pt-2">
                  <a href="https://sass-lang.com/" target="blank"><img
                    src={sass}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-10 lg:pt-6">
                  <a href="https://tailwindcss.com/" target="blank"> <img
                    src={tailwind}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-10 lg:pt-6">
                  <a href="https://git-scm.com/" target="blank"><img
                    src={git}
                    height="50px"
                    width="50px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
                <li className="list-none pt-7 lg:pt-4">
                  <a href="https://getbootstrap.com/" target="blank"><img
                    src={bootstrap}
                    height="40px"
                    width="61px"
                    alt=""
                    loading="lazy"
                  /></a>
                </li>
              </div>
            </div>
          </div>
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-contain md:object-none md:h-full md:w-96"
              src={about}
              alt="Modern building architecture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About_us;
