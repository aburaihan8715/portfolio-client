"use client";
import React from "react";
import Heading from "@/components/common/heading";
import BlogCard from "./blog-card";
// import Link from "next/link";

import blog1 from "@/assets/images/blog1.jpg";
import blog2 from "@/assets/images/blog2.jpg";
import blog3 from "@/assets/images/blog3.jpg";

const blogData = [
  {
    id: 1,
    coverImage: blog1.src,
    title: "Turning Errors into Learning Opportunities",
    overview: "Explore tips, strategies, and tools to debug your code efficiently and transform challenges into growth moments.",
    content:
      "It shows that debugging consists of 40% of the total time spent. Making debugging the most important and time-consuming step in the overall coding process.While coding is undoubtedly a creative endeavor, debugging is the practical application of problem-solving skills. As we see debugging is a challenging task, with methods and techniques we can simplify and quickly debug software code. This will increase your efficiency and productivity as a software developer.In this article, we delve into the essential debugging techniques that every developer should master to solve errors more efficiently. These techniques can be used regardless of any programming language or framework.",
  },
  {
    id: 1,
    coverImage: blog2.src,
    title: "A Beginner's Guide to Becoming a Full-Stack Developer",
    overview: "A step-by-step guide to building your skillset and portfolio for a thriving career in full-stack development.",
    content:
      "It shows that debugging consists of 40% of the total time spent. Making debugging the most important and time-consuming step in the overall coding process.While coding is undoubtedly a creative endeavor, debugging is the practical application of problem-solving skills. As we see debugging is a challenging task, with methods and techniques we can simplify and quickly debug software code. This will increase your efficiency and productivity as a software developer.In this article, we delve into the essential debugging techniques that every developer should master to solve errors more efficiently. These techniques can be used regardless of any programming language or framework.",
  },
  {
    id: 1,
    coverImage: blog3.src,
    title: "Exploring AI, Quantum Computing, and Emerging Technologies",
    overview: "Dive into the cutting-edge innovations reshaping the programming world and what they mean for developers.",
    content:
      "It shows that debugging consists of 40% of the total time spent. Making debugging the most important and time-consuming step in the overall coding process.While coding is undoubtedly a creative endeavor, debugging is the practical application of problem-solving skills. As we see debugging is a challenging task, with methods and techniques we can simplify and quickly debug software code. This will increase your efficiency and productivity as a software developer.In this article, we delve into the essential debugging techniques that every developer should master to solve errors more efficiently. These techniques can be used regardless of any programming language or framework.",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto px-2">
        <div className="mb-20 flex justify-center">
          <Heading text={`Blogs`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <div
            onClick={() => {
              return alert("Not implemented yet!");
            }}
            // href="/blogs"
            className="md:ml-4 inline-flex text-gray-300 bg-transparent py-2 px-6 focus:outline-none hover:bg-gray-700 transition duration-100 rounded-md text-lg border border-gray-300 w-fit"
          >
            See More
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
