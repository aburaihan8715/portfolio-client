/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BlogCard from './blog-card';
import { IBlog } from '@/interface/blog.interface';

const BlogTab = ({ frontend, backend, all }: any) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <div className="mx-auto w-full max-w-md rounded-full p-1 ring-1 ring-gray-600">
        <TabList className="relative flex items-center justify-center rounded-full">
          <Tab
            selectedClassName="outline-0"
            className="w-[50%] cursor-pointer rounded-full px-8 py-2 text-center"
          >
            All
          </Tab>

          <Tab
            selectedClassName="outline-0"
            className="w-[50%] cursor-pointer rounded-full px-8 py-2 text-center"
          >
            Backend
          </Tab>

          <Tab
            selectedClassName="outline-0"
            className="w-[50%] cursor-pointer rounded-full px-8 py-2 text-center"
          >
            Frontend
          </Tab>

          <span
            className={`absolute left-0 top-0 h-full w-[33.33%] cursor-pointer rounded-full bg-gray-700/50 transition-transform duration-500 ${
              (tabIndex === 0 && 'translate-x-0') ||
              (tabIndex === 1 && 'translate-x-[100%]') ||
              (tabIndex === 2 && 'translate-x-[200%]')
            }`}
          />
        </TabList>
      </div>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {all.map((blog: IBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {backend.map((blog: IBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {frontend.map((blog: IBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default BlogTab;
