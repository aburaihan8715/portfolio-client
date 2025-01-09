"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState<number | null>(0);

  // according data
  const accordingData = [
    {
      title: "Full-Stack Proficiency",
      description:
        "Being proficient in the full-stack means I can handle both the front-end and back-end development of web applications. This versatility can be strength for your company to streamline your development teams, reduce dependencies, and create a cohesive, efficient development process.",
    },
    {
      title: "React Expertise",
      description:
        "React is one of the most popular front-end JavaScript libraries for building user interfaces. I am expertise in React signifies that I can create interactive and responsive web applications, providing a seamless user experience. If your company seek React developers to enhance online presence and engage users effectively, you might consider my expertise.",
    },

    {
      title: "Scalability and Performance",
      description: `Full-Stack is known for its scalability and performance capabilities. Your company may hire me to optimize existing web applications or build new ones that can handle a growing user base and provide fast response times, ensuring a positive user experience and potentially increasing revenue.`,
    },

    {
      title: "Database Management",
      description:
        "My skills in database management are valuable for companies dealing with large volumes of data, making me an asset for projects that require efficient data storage and retrieval.",
    },
  ];

  const handleClick = (index: number) => setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article key={index} className="border-b border-gray-700 rounded py-3">
          <div className="flex gap-2 cursor-pointer items-center justify-between w-full" onClick={() => handleClick(index)}>
            <h2 className="text-gray-400 font-medium text-[1.2rem]">{according.title}</h2>
            <p>
              <FaChevronDown
                className={`text-[1.2rem] text-gray-400 transition-all duration-300 ${isAccordingOpen === index && "rotate-[180deg] !text-cyan-400"}`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isAccordingOpen === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="text-gray-300 overflow-hidden">{according.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Accordion;
