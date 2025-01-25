'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import QuillContent from '@/components/blog-view/quill-content';
import { useQuery } from '@tanstack/react-query';
import { config } from '@/config';
import { IBlog } from '@/interface/blog.interface';

const BlogDetails = () => {
  const params = useParams();
  const blogId = params?.blogId as string;

  const { isPending, error, data } = useQuery({
    queryKey: ['blogs', blogId],
    queryFn: () =>
      fetch(`${config.BASE_URL}/api/v1/blogs/${blogId}`).then((res) =>
        res.json(),
      ),
  });

  const blog: IBlog = data?.data || {};

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // MAIN CONTENT
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="relative mb-6 aspect-[16/9] rounded-lg">
            <Image
              src={
                blog?.coverImage ||
                'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png'
              }
              alt={blog?.title}
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              {blog?.title}
            </h1>
          </div>

          {/* Author Information */}
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <div className="relative mr-3 h-10 w-10 rounded-full object-cover">
                <Image
                  fill
                  src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`user`}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span>by {`Abu Raihan`}</span>
                  <span className="mx-2">•</span>
                  <span>{blog?.createdAt.slice(0, 10)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-4 mt-5">
            <QuillContent content={blog?.content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
