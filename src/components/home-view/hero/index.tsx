import Image from "next/image";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import profilePhoto from "@/assets/images/me.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto px-2">
        <div className="flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
            <p className="text-xl font-semibold text-gray-300">Hi, I&apos;m Abu Raihan</p>
            <h1 className="md:text-5xl text-2xl mb-4 font-semibold mt-3 text-gray-300">Full-Stack Web Developer</h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              I am Abu Raihan a full-stack web developer with a passion for crafting web applications that combine functionality and aesthetics. I
              specialize in building robust web applications using React, Next js, MongoDB, Postgres and Node js. I am deeply passionate about web
              development and constantly seek opportunities to expand my knowledge.
            </p>
            <div className="flex flex-col md:flex-row gap-2 md:justify-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1hUgu5Q5hMynQQHTTK8_SdShK8-8HSx1D"
                target="_blank"
                className="inline-flex text-cyan-500 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 transition duration-100 rounded-md text-lg w-fit"
              >
                <span>Download Cv</span>
                <span className="animate-bounce w-6 h-6 p-2 text-xl">
                  <FaArrowAltCircleDown />
                </span>
              </a>
              <a
                href="#about-me"
                className="md:ml-4 inline-flex text-gray-300 bg-transparent py-2 px-6 focus:outline-none hover:bg-gray-700 transition duration-100 rounded-md text-lg border border-gray-300 w-fit"
              >
                About me
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative flex justify-end">
            <Image className="object-contain w-[90%] rounded-full border-4 border-gray-400" alt="hero" src={profilePhoto} />

            <div className="absolute top-[70%] left-[-5%] px-8 py-3 flex flex-col rounded-md text-center bg-gray-700 animate-smooth-move">
              <span className="text-3xl font-semibold text-cyan-400">2+</span>
              <span className="text-gray-300">Years of experiences</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
