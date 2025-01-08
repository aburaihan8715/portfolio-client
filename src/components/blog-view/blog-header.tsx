"use client";

import BrandLogo from "../common/brand-logo";
import ThemeToggleButton from "../common/theme-toggle-button";
import Link from "next/link";

// HEADER COMPONENT
const BlogHeader = () => {
  return (
    <>
      {/* DESKTOP NAV */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-[0px_1px_1px_rgba(255,255,255,0.3)]">
        <div className="max-w-7xl w-full mx-auto">
          <nav className="h-[80px] flex w-full items-center justify-between">
            {/* logo */}
            <Link href="/">
              <BrandLogo />
            </Link>

            {/* theme toggle and resume button */}
            <div className="flex gap-3 text-gray-300">
              <ThemeToggleButton />
              <button className="border border-gray-300 px-3 py-2 rounded-md text-[18px] hover:bg-gray-700 transition duration-100">Resume</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default BlogHeader;
