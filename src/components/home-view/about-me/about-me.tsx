import React from "react";
import Heading from "@/components/common/heading";

import programmingImage from "@/assets/images/programming.svg";
import Image from "next/image";
import AboutMeTab from "./tab";

const AboutMe = () => {
  return (
    <section id="about-me" className="scroll-m-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-10 flex justify-center">
          <Heading text={`about me`} />
        </div>
        <div className="flex">
          <div className="flex-1 border p-10">
            <Image src={programmingImage} alt="programming" />
          </div>
          <div className="flex-1">
            <AboutMeTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
