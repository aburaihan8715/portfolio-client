"use client";
import React from "react";
import { motion } from "motion/react";
const SkillCard = ({ text }: { text: string }) => {
  return (
    <div className="border-2 border-gray-600 border-dashed p-10 rounded-md cursor-pointer hover:border-cyan-400 transition duration-200">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} key={Math.random()}>
        {text}
      </motion.div>
    </div>
  );
};

export default SkillCard;
