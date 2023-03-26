import React from "react";
import logo from "../images/logo.webp";
function Contact() {
  return (
    <section>
      <div className=" mt-0 mx-auto md:m-20 md:mx-auto rounded-xl shadow-md overflow-hidden max-w-3xl md:max-w-7xl">
        <div className="md:flex">
          <div className="p-8 text-center ">
            <div className="tracking-wide text-gray-900 font-semibold sm:text-5xl text-3xl">
              Get In Touch
            </div>
            <p className="pt-4 text-white sm:pt-0 sm:text-xl sm:my-6 text-lg">
              I’m currently searching for opportunities for a front-end
              developer role. <br /> If there is any vacancy my inbox is always
              open. Whether
              <br /> you have any further questions or just want to say hi,{" "}
              <br />
              I’ll try my best to get back to you!
            </p>
            <a
              href="https://wa.me/7018558114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-double border-4 border-black ... w-40 h-14 mt-14 hover:animate-pulse hover:text-white hover:transition duration-700 hover:ease-in-out ...">
                Say Hello!
              </button>
            </a>
          </div>
          <div>
            <img src={logo} className="App-logo m-auto" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
