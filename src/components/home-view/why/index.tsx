import React from "react";
import Heading from "@/components/common/heading";
import whyImage from "@/assets/images/why.svg";
import Image from "next/image";
import Accordion from "./accordion";

const Why = () => {
  return (
    <section id="why" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto px-2">
        <div className="mb-20 flex justify-center">
          <Heading text={`Why`} />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 p-10 rounded-md">
            <Image className="w-[70%]" src={whyImage} alt="why image" />
          </div>
          <div className="flex-[2] px-5 rounded-md bg-gray-900">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
