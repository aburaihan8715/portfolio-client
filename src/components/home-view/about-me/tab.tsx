"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const AboutMeTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="ring-1 ring-gray-600 p-1 rounded-full">
        <TabList className="flex p-1 rounded-full items-center justify-center relative">
          <Tab selectedClassName="" className=" cursor-pointer px-8 py-2 rounded-full w-[33.33%] text-center">
            Title 1
          </Tab>

          <Tab selectedClassName="" className="cursor-pointer px-8 py-2 rounded-full  w-[33.33%] text-center">
            Title 2
          </Tab>

          <Tab selectedClassName="" className=" cursor-pointer px-8 py-2 rounded-full w-[33.33%] text-center">
            Title 3
          </Tab>

          <span
            className={`absolute left-0 top-0 h-full w-[33.33%] bg-gray-700/50 rounded-full transition-transform duration-500 cursor-pointer ${
              tabIndex === 1 ? "translate-x-full" : tabIndex === 2 ? "translate-x-[200%]" : "translate-x-0"
            }`}
          />
          {/* <span
          className={`absolute left-0 top-0 h-full w-[33.33%] bg-green-400/50 rounded-full transition-transform duration-500`}
          style={{ transform: `translateX(${tabIndex * 100}%)` }}
        /> */}
        </TabList>
      </div>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default AboutMeTab;
