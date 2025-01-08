import React from "react";
import Heading from "@/components/common/heading";
import BlogTab from "@/components/home-view/bolos/tab";

const Blogs = () => {
  return (
    <section id="blogs" className="scroll-m-20 py-2 md:py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-20 flex justify-center">
          <Heading text={`Blogs`} />
        </div>
        <div>
          <BlogTab />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
