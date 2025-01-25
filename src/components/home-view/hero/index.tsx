import Image from 'next/image';
import React from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import profilePhoto from '@/assets/images/me.png';
import Container from '@/components/common/container';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] scroll-m-20 py-2 md:py-10"
    >
      <Container>
        <div className="flex flex-col items-center px-2 md:flex-row">
          <div className="mb-16 flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <p className="text-xl font-semibold text-gray-300">
              Hi, I&apos;m Abu Raihan
            </p>
            <h1 className="mb-4 mt-3 text-2xl font-semibold text-gray-300 md:text-5xl">
              Full-Stack Web Developer
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              I am Abu Raihan a full-stack web developer with a passion for
              crafting web applications that combine functionality and
              aesthetics. I specialize in building robust web applications
              using React, Next js, MongoDB, Postgres and Node js. I am
              deeply passionate about web development and constantly seek
              opportunities to expand my knowledge.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:justify-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1hUgu5Q5hMynQQHTTK8_SdShK8-8HSx1D"
                target="_blank"
                className="inline-flex w-fit rounded-md border-0 bg-gray-700 px-6 py-2 text-lg text-cyan-500 transition duration-100 hover:bg-gray-500 focus:outline-none"
              >
                <span>Download Cv</span>
                <span className="h-6 w-6 animate-bounce p-2 text-xl">
                  <FaArrowAltCircleDown />
                </span>
              </a>
              <a
                href="#about-me"
                className="inline-flex w-fit rounded-md border border-gray-300 bg-transparent px-6 py-2 text-lg text-gray-300 transition duration-100 hover:bg-gray-700 focus:outline-none md:ml-4"
              >
                About me
              </a>
            </div>
          </div>
          <div className="relative flex w-5/6 justify-end md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className="w-[90%] rounded-full border-4 border-gray-400 object-contain"
              alt="hero"
              src={profilePhoto}
            />

            <div className="absolute left-[-5%] top-[70%] flex animate-smooth-move flex-col rounded-md bg-gray-700 px-8 py-3 text-center">
              <span className="text-3xl font-semibold text-cyan-400">
                2+
              </span>
              <span className="text-gray-300">Years of experiences</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
