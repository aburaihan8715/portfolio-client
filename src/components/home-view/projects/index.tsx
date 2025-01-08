import React from "react";
import Heading from "@/components/common/heading";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-20 flex justify-center">
          <Heading text={`Projects`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[...Array(3)].map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
