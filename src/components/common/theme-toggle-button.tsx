import React, { useState } from "react";

const ThemeToggleButton = () => {
  const [toggleThemeIcon, setToggleThemeIcon] = useState(true);
  return (
    <button
      onClick={() => setToggleThemeIcon(!toggleThemeIcon)}
      className="border border-gray-300 w-11 h-11 rounded-md text-[18px] flex items-center justify-center transition duration-500"
    >
      <span className={`absolute transition-opacity duration-500 ${toggleThemeIcon ? "opacity-100" : "opacity-0"}`}>☀</span>

      <span className={`absolute transition-opacity duration-500 ${!toggleThemeIcon ? "opacity-100" : "opacity-0"}`}>🌙</span>
    </button>
  );
};

export default ThemeToggleButton;
