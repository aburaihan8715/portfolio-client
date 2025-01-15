"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface IProps {
  project: {
    id: number;
    name: string;
    type: string;
    coverImage: string;
    overview: string;
    techTack: string[];
    links: string[];
  };
}

const ProjectCard = ({ project }: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      <div className="h-full ring-1 ring-gray-600 rounded-md overflow-hidden">
        <Image
          width={500}
          height={500}
          className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 duration-500"
          src={project.coverImage ? project.coverImage : "https://dummyimage.com/720x400"}
          alt="blog"
        />

        <div className="p-6">
          <h2 className="font-medium text-gray-300 text-2xl">
            {project.name} - {project.type}
          </h2>

          <p className="leading-relaxed mb-3 text-gray-300 mt-2">
            {isExpanded ? project.overview : project.overview.slice(0, 120)}
            <button onClick={handleToggle} className="text-cyan-500 hover:underline focus:outline-none ml-2 align-baseline">
              {isExpanded ? "See Less" : "See More"}
            </button>
          </p>
          <div className="flex flex-wrap gap-3 items-center text-gray-300">
            <strong>Technology: </strong>
            {project.techTack.map((item) => (
              <span key={item} className="py-0.5 px-1.5 ring-1 text-[14px] rounded-md ring-gray-500">
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-5 text-gray-300">
            <a
              href={project.links[0]}
              className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-700 transition duration-100 flex items-center gap-2 w-fit"
            >
              <FaGithub className="" />
              <span>Client</span>
            </a>
            <a
              href={project.links[1]}
              className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-700 transition duration-100 flex items-center gap-2 w-fit"
            >
              <FaExternalLinkAlt className="" />
              <span>Live</span>
            </a>
            <a
              href={project.links[2]}
              className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-700 transition duration-100 flex items-center gap-2 w-fit"
            >
              <FaGithub className="" />
              <span>Server</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
