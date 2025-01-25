'use client';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SkillCard from './skill-card';

import {
  FaBootstrap,
  FaCss3,
  FaDev,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaYarn,
} from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import {
  SiAntdesign,
  SiExpress,
  SiMongoose,
  SiNetlify,
  SiNpm,
  SiPostman,
  SiPrisma,
  SiReacttable,
  SiRedux,
  SiShadcnui,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiVercelLine,
} from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';

const frondEndSkills = [
  {
    id: 1,
    title: 'HTML',
    icon: FaHtml5,
  },
  {
    id: 2,
    title: 'CSS',
    icon: FaCss3,
  },
  {
    id: 3,
    title: 'Javascript',
    icon: FaJs,
  },
  {
    id: 4,
    title: 'TypeScript',
    icon: BiLogoTypescript,
  },
  {
    id: 5,
    title: 'Bootstrap',
    icon: FaBootstrap,
  },
  {
    id: 6,
    title: 'Tailwind',
    icon: RiTailwindCssFill,
  },
  {
    id: 7,
    title: 'Ant Design',
    icon: SiAntdesign,
  },
  {
    id: 8,
    title: 'Shadcn ui',
    icon: SiShadcnui,
  },
  {
    id: 9,
    title: 'Sass',
    icon: FaSass,
  },
  {
    id: 10,
    title: 'React',
    icon: FaReact,
  },
  {
    id: 11,
    title: 'Next',
    icon: RiNextjsFill,
  },
  {
    id: 12,
    title: 'Redux',
    icon: SiRedux,
  },

  {
    id: 13,
    title: 'Motion',
    icon: TbBrandFramerMotion,
  },
  {
    id: 14,
    title: 'Firebase',
    icon: RiFirebaseFill,
  },
  {
    id: 15,
    title: 'T Table',
    icon: SiReacttable,
  },
];

const backEndSkills = [
  {
    id: 1,
    title: 'Node',
    icon: FaNodeJs,
  },
  {
    id: 2,
    title: 'TypeScript',
    icon: BiLogoTypescript,
  },
  {
    id: 3,
    title: 'Express',
    icon: SiExpress,
  },
  {
    id: 5,
    title: 'Mongodb',
    icon: DiMongodb,
  },
  {
    id: 6,
    title: 'Postgres',
    icon: BiLogoPostgresql,
  },
  {
    id: 7,
    title: 'MySQL',
    icon: DiMysql,
  },

  {
    id: 8,
    title: 'Mongoose',
    icon: SiMongoose,
  },
  {
    id: 9,
    title: 'Prisma',
    icon: SiPrisma,
  },
];

const tools = [
  {
    id: 1,
    title: 'Postman',
    icon: SiPostman,
  },
  {
    id: 2,
    title: 'VS Code',
    icon: VscVscode,
  },
  {
    id: 3,
    title: 'Vercel',
    icon: RiVercelLine,
  },
  {
    id: 4,
    title: 'Github',
    icon: FaGithub,
  },
  {
    id: 5,
    title: 'Git',
    icon: FaGit,
  },
  {
    id: 6,
    title: 'NPM',
    icon: SiNpm,
  },
  {
    id: 7,
    title: 'Yarn',
    icon: FaYarn,
  },
  {
    id: 8,
    title: 'Netlify',
    icon: SiNetlify,
  },
  {
    id: 9,
    title: 'Vite',
    icon: SiVite,
  },
  {
    id: 10,
    title: 'Dev Tools',
    icon: FaDev,
  },
];

const SkillsTab = () => {
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
            className="w-[50%] cursor-pointer rounded-full py-2 text-center md:px-8"
          >
            Front-End
          </Tab>

          <Tab
            selectedClassName="outline-0"
            className="w-[50%] cursor-pointer rounded-full py-2 text-center md:px-8"
          >
            Back-End
          </Tab>

          <Tab
            selectedClassName="outline-0"
            className="w-[50%] cursor-pointer rounded-full py-2 text-center md:px-8"
          >
            Tools
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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {frondEndSkills.map((item) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {backEndSkills.map((item) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {tools.map((item) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default SkillsTab;
