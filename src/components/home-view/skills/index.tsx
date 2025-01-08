import React from "react";
import Heading from "@/components/common/heading";
import SkillsTab from "./tab";

const Skills = () => {
  return (
    <section id="skills" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-20 flex justify-center">
          <Heading text={`Skills`} />
        </div>
        <div>
          <SkillsTab />
        </div>
      </div>
    </section>
  );
};

export default Skills;
