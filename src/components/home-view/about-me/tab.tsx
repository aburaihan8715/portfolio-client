"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "motion/react";
const AboutMeTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="ring-1 ring-gray-600 p-1 rounded-full">
        <TabList className="flex rounded-full items-center justify-center relative">
          <Tab selectedClassName="outline-0" className=" cursor-pointer px-8 py-2 rounded-full w-[50%] text-center">
            About me
          </Tab>

          <Tab selectedClassName="outline-0" className="cursor-pointer px-8 py-2 rounded-full  w-[50%] text-center">
            Hobby
          </Tab>

          <span
            className={`absolute left-0 top-0 h-full w-[50%] bg-gray-700/50 rounded-full transition-transform duration-500 cursor-pointer ${
              (tabIndex === 0 && "translate-x-0") || (tabIndex === 1 && "translate-x-[100%]")
            }`}
          />
          {/* <span
          className={`absolute left-0 top-0 h-full w-[33.33%] bg-green-400/50 rounded-full transition-transform duration-500`}
          style={{ transform: `translateX(${tabIndex * 100}%)` }}
        /> */}
        </TabList>
      </div>

      <TabPanel>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={tabIndex}
          className="mt-6 space-y-5"
        >
          <p className="text-gray-300">
            Hi, This is Abu Raihan a dedicated full-tack developer with a passion for crafting web applications that combine functionality and
            aesthetics.
          </p>
          <p className="text-gray-300">
            I specialize in building robust web applications using React js,Mongodb, Postgres, Express js and Node js. I am deeply passionate about
            web development and constantly seek opportunities to expand my knowledge. In my free time, I contribute to open-source projects and
            experiment with new technologies.
          </p>
          <p className="text-gray-300">
            I am a collaborative team player who values effective communication. I enjoy collaborating with designers, product managers, and fellow
            developers to bring projects to life. I am always open to new opportunities and collaborations. If you would like to discuss a project,
            explore potential partnerships, or simply connect, feel free to reach out.
          </p>
        </motion.div>
      </TabPanel>
      <TabPanel>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={tabIndex}
          className="mt-6 space-y-5"
        >
          <p className="text-gray-300">
            I have a deep passion for both reading books and traveling, as they allow me to explore new worlds in their own unique ways. Through
            books, I can lose myself in captivating stories, whether it’s an imaginative fantasy, a thrilling mystery, or a profound work of
            non-fiction. Each page brings new perspectives, broadening my understanding of cultures, histories, and ideas that I might never encounter
            in everyday life. Books have the power to transport me to distant lands and eras, igniting my curiosity and imagination.
          </p>
          <p className="text-gray-300">
            Traveling, on the other hand, brings these explorations to life. It allows me to experience the beauty of the world firsthand—whether it’s
            walking along sandy beaches, hiking through breathtaking mountains, or wandering through vibrant cityscape. Meeting people from different
            backgrounds and immersing myself in their traditions and cuisines adds a layer of depth to what I’ve read. Every journey teaches me
            something new, whether it’s about the world around me or about myself.
          </p>
        </motion.div>
      </TabPanel>
    </Tabs>
  );
};

export default AboutMeTab;
