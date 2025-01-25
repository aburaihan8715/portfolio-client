'use client';

import BlogTab from '@/components/blog-view/tab';
import Heading from '@/components/common/heading';

import { useQuery } from '@tanstack/react-query';
import { config } from '@/config';
import { IBlog } from '@/interface/blog.interface';

const Blogs = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
      fetch(`${config.BASE_URL}/api/v1/blogs`).then((res) => res.json()),
  });

  const blogs: IBlog[] = data?.data || [];
  const frontendData = blogs?.filter(
    (item) => item?.category === 'frontend',
  );
  const backendData = blogs?.filter(
    (item) => item?.category === 'backend',
  );

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <section id="blogs" className="scroll-m-20 py-2 md:py-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-20 flex justify-center">
          <Heading text={`Blogs`} />
        </div>
        <div>
          <BlogTab
            frontend={frontendData}
            backend={backendData}
            all={blogs}
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
