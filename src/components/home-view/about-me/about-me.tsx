import React from "react";
import Heading from "@/components/common/heading";

import programmingImage from "@/assets/images/programming.svg";
import Image from "next/image";
import AboutMeTab from "./tab";

const AboutMe = () => {
  return (
    <section id="about-me" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-20 flex justify-center">
          <Heading text={`about me`} />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 p-10 bg-gray-900 rounded-md">
            <Image src={programmingImage} alt="programming" />
          </div>
          <div className="flex-1 px-2">
            <AboutMeTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
