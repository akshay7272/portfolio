import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav className=" sm:px-12 sm:py-6 lg:text-sm sm:text-xs  text-white ">
        <div className="hidden sm:flex flex-row justify-between pr-11 sm:p-0 sm:text-sm lg:text-lg">
          <img
            className="h-8 w-8 rounded-full sm:flex sm:h-14 sm:w-auto"
            src="https://avatars.githubusercontent.com/u/88529196?v=4"
            alt=""
          />
          <div className="hidden sm:flex flex-row justify-between gap-5 list-none items-center ">
            <Link to="/">
              <li className="px-3  hover:text-black cursor-pointer active:text-red ">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="px-3  hover:text-black cursor-pointer">About</li>
            </Link>
            <Link to="/projects">
              <li className="px-3  hover:text-black cursor-pointer">
                Projects
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-black cursor-pointer">Contact</li>
            </Link>
            <a
              href="https://drive.google.com/file/d/1nvoOIIGtMQC4iHiRq3SdjGrQUTyFmRVx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" pl-5 pr-5 pt-1 pb-1 cursor-pointer rounded-3xl bg-gradient-to-r from-purple-500 to-teal-500 ... hover:from-pink-500 hover:to-purple-500 ...">
                Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
