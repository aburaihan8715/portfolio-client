'use client';
import React from 'react';
import Heading from '@/components/common/heading';
import BlogCard from '../../blog-view/blog-card';

import Container from '@/components/common/container';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { config } from '@/config';
import { IBlog } from '@/interface/blog.interface';

const FeaturedBlogs = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['featured-blogs'],
    queryFn: () =>
      fetch(`${config.BASE_URL}/api/v1/blogs/featured-blogs`).then((res) =>
        res.json(),
      ),
  });

  const blogs: IBlog[] = data?.data || [];

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <section id="blogs" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`Blogs`} />
        </div>
        <div className="grid grid-cols-1 gap-5 px-2 md:grid-cols-3">
          {blogs?.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
        <div className="mt-2 flex justify-end">
          <Link
            href="/blogs"
            className="inline-flex w-fit rounded-md border border-gray-300 bg-transparent px-6 py-2 text-lg text-gray-300 transition duration-100 hover:bg-gray-700 focus:outline-none md:ml-4"
          >
            See More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedBlogs;
