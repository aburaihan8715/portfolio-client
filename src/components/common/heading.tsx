import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <div className="relative w-fit">
      <h1 className="w-full capitalize text-4xl font-medium">{text}</h1>
      <span className="h-[3px] bg-cyan-500 w-[70%] inline-block absolute -bottom-3 right-0" />
      <span className="h-0.5 bg-gray-400 w-[50%] inline-block absolute -bottom-6 right-0" />
    </div>
  );
};

export default Heading;
