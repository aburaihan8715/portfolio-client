'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface IProps {
  project: {
    _id: string;
    name: string;
    type: string;
    coverImage?: string;
    overview: string;
    techStack: string[];
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
      <div className="h-full overflow-hidden rounded-md ring-1 ring-gray-600">
        <Image
          width={500}
          height={500}
          className="w-full object-cover object-center duration-500 hover:scale-105 md:h-36 lg:h-48"
          src={
            project?.coverImage
              ? project?.coverImage
              : 'https://dummyimage.com/720x400'
          }
          alt="blog"
        />

        <div className="p-6">
          <h2 className="text-2xl font-medium text-gray-300">
            {project?.name} - {project?.type}
          </h2>

          <p className="mb-3 mt-2 leading-relaxed text-gray-300">
            {isExpanded
              ? project?.overview
              : project?.overview?.slice(0, 120)}
            <button
              onClick={handleToggle}
              className="ml-2 align-baseline text-cyan-500 hover:underline focus:outline-none"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </p>
          <div className="flex flex-wrap items-center gap-3 text-gray-300">
            <strong>Technology: </strong>
            {project?.techStack?.map((item) => (
              <span
                key={item}
                className="rounded-md px-1.5 py-0.5 text-[14px] ring-1 ring-gray-500"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-gray-300">
            <a
              href={project?.links[0]}
              className="flex w-fit items-center gap-2 rounded-md border border-gray-300 px-3 py-1 transition duration-100 hover:bg-gray-700"
            >
              <FaGithub className="" />
              <span>Client</span>
            </a>
            <a
              href={project?.links[1]}
              className="flex w-fit items-center gap-2 rounded-md border border-gray-300 px-3 py-1 transition duration-100 hover:bg-gray-700"
            >
              <FaExternalLinkAlt className="" />
              <span>Live</span>
            </a>
            <a
              href={project?.links[2]}
              className="flex w-fit items-center gap-2 rounded-md border border-gray-300 px-3 py-1 transition duration-100 hover:bg-gray-700"
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
