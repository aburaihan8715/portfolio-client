/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "motion/react";
const SkillCard = ({ item }: any) => {
  const title = item.title;
  const Icon = item.icon;
  return (
    <div className="border-2 border-gray-600 border-dashed p-5 rounded-md cursor-pointer hover:border-cyan-400 transition duration-200">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={Math.random()}>
        {
          <div className="flex flex-col justify-center items-center gap-2">
            <Icon className="text-4xl text-gray-300">{title}</Icon>
            <span className="text-xl text-gray-300">{title}</span>
          </div>
        }
      </motion.div>
    </div>
  );
};

export default SkillCard;
