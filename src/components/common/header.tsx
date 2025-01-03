"use client";
import { useState } from "react";

import BrandLogo from "./brand-logo";
import { MdClose, MdMenu } from "react-icons/md";
import ThemeToggleButton from "./theme-toggle-button";
import HashLink from "./hash-link";

// HEADER COMPONENT
const Header = () => {
  const [open, setOpen] = useState(true);

  const menuItems = (
    <>
      <li>
        <HashLink href="#about-me">About Me</HashLink>
      </li>
      <li>
        <HashLink href="#experiences">Experience</HashLink>
      </li>
      <li>
        <HashLink href="#skills">Skills</HashLink>
      </li>
      <li>
        <HashLink href="#projects">Projects</HashLink>
      </li>
      <li>
        <HashLink href="#blogs">Blogs</HashLink>
      </li>
      <li>
        <HashLink href="#achievements">Achievements</HashLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-[0px_1px_1px_rgba(255,255,255,0.3)]">
      {/* DESKTOP NAV */}
      <div className="max-w-7xl w-full mx-auto">
        <div className="sticky top-0 z-20 hidden h-[80px] w-full items-center justify-between lg:flex">
          {/* LOGO */}
          <HashLink href="#hero">
            <BrandLogo />
          </HashLink>
          <nav>
            <ul className="flex gap-4 text-[18px]  text-gray-300">{menuItems}</ul>
          </nav>

          <div className="flex gap-3 text-gray-300">
            <ThemeToggleButton />
            <button className="border border-gray-300 px-3 py-2 rounded-md text-[18px] hover:bg-gray-700 transition duration-100">Resume</button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden">
        <div className="fixed top-0 z-20 flex h-[80px] w-full items-center justify-between bg-[#e9effd] px-2">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex h-10 w-10 items-center justify-center border border-primary text-3xl text-primary">
                <MdMenu />
              </button>
            )}

            {!open && (
              <button className="flex h-10 w-10 items-center justify-center border border-primary text-3xl text-primary">
                <MdClose />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">light</div>
        </div>

        <nav className="">
          <ul
            className={`fixed top-[80px] z-20 flex h-full w-[180px] -translate-x-[100%] flex-col gap-2 bg-yellow-50/90 pl-8 pt-5 font-semibold text-[#212529] transition-transform duration-500 ${
              !open && "translate-x-0"
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
