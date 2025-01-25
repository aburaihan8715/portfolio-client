'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  blog: {
    _id: string;
    coverImage?: string | undefined;
    title: string;
    category: string;
    overview: string;
    content: string;
  };
}
const BlogCard = ({ blog }: IProps) => {
  return (
    <div className="relative">
      <div className="h-full overflow-hidden rounded-md ring-1 ring-gray-600">
        <Image
          width={500}
          height={500}
          className="w-full object-cover object-center opacity-70 md:h-36 lg:h-48"
          src={
            blog.coverImage
              ? blog.coverImage
              : 'https://dummyimage.com/720x400'
          }
          alt="blog"
        />
        <div className="p-6">
          <h2 className="text-2xl font-medium text-gray-300">
            {blog.title}
          </h2>
          <p className="mt-3">{blog.overview.slice(0, 100)}...</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900/70 opacity-0 transition duration-500 hover:rounded-md hover:opacity-100">
        <Link
          className="rounded-md border border-gray-300 px-3 py-2 text-[18px] transition duration-100 hover:bg-gray-700"
          href={`/blogs/${blog._id}`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
