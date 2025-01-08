"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SkillCard from "./skill-card";
const SkillsTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="ring-1 ring-gray-600 p-1 rounded-full w-full max-w-md mx-auto">
        <TabList className="flex rounded-full items-center justify-center relative">
          <Tab selectedClassName="outline-0" className=" cursor-pointer px-8 py-2 rounded-full w-[50%] text-center">
            Front-End
          </Tab>

          <Tab selectedClassName="outline-0" className="cursor-pointer px-8 py-2 rounded-full  w-[50%] text-center">
            Back-End
          </Tab>

          <Tab selectedClassName="outline-0" className="cursor-pointer px-8 py-2 rounded-full  w-[50%] text-center">
            Tools
          </Tab>

          <span
            className={`absolute left-0 top-0 h-full w-[33.33%] bg-gray-700/50 rounded-full transition-transform duration-500 cursor-pointer ${
              (tabIndex === 0 && "translate-x-0") || (tabIndex === 1 && "translate-x-[100%]") || (tabIndex === 2 && "translate-x-[200%]")
            }`}
          />
        </TabList>
      </div>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {[...Array(12)].map((_, index) => (
              <SkillCard key={index} text="Front-End" />
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {[...Array(15)].map((_, index) => (
              <SkillCard key={index} text="Back-End" />
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {[...Array(9)].map((_, index) => (
              <SkillCard key={index} text="Tools" />
            ))}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default SkillsTab;
