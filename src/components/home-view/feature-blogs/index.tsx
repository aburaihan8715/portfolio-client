import React from "react";
import Heading from "@/components/common/heading";
import BlogCard from "./blog-card";
import Link from "next/link";

const Blogs = () => {
  return (
    <section id="blogs" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-20 flex justify-center">
          <Heading text={`Blogs`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[...Array(3)].map((_, index) => (
            <BlogCard text="blog" key={index} />
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <Link
            href="/blogs"
            className="md:ml-4 inline-flex text-gray-300 bg-transparent py-2 px-6 focus:outline-none hover:bg-gray-700 transition duration-100 rounded-md text-lg border border-gray-300 w-fit"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
