"use client";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

interface IProps {
  blog: {
    id: number;
    coverImage: string;
    title: string;
    overview: string;
    content: string;
  };
}
const BlogCard = ({ blog }: IProps) => {
  return (
    <div className="relative">
      <div className="h-full ring-1 ring-gray-600 rounded-md overflow-hidden">
        <Image
          width={500}
          height={500}
          className="lg:h-48 md:h-36 w-full object-cover object-center opacity-70"
          src={blog.coverImage ? blog.coverImage : "https://dummyimage.com/720x400"}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="font-medium text-gray-300 text-2xl">{blog.title}</h2>
          <p className="mt-3">{blog.overview.slice(0, 100)}...</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900/70 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-500 hover:rounded-md">
        <div
          onClick={() => {
            return alert("Not implemented yet!");
          }}
          className="border border-gray-300 px-3 py-2 rounded-md text-[18px] hover:bg-gray-700 transition duration-100"
          // href={`/blogs/123`}
        >
          See Details
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
