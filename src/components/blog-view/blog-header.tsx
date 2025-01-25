'use client';

import BrandLogo from '../common/brand-logo';
import Link from 'next/link';

// HEADER COMPONENT
const BlogHeader = () => {
  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-50 bg-gray-900 shadow-[0px_1px_1px_rgba(255,255,255,0.3)]">
        <div className="mx-auto w-full max-w-5xl">
          <nav className="flex h-[80px] w-full items-center justify-between px-2">
            {/* logo */}
            <Link href="/">
              <BrandLogo />
            </Link>

            {/* theme toggle and resume button */}
            <div className="flex gap-3 text-gray-300">
              {/* <ThemeToggleButton /> */}
              <button className="rounded-md border border-gray-300 px-3 py-2 text-[18px] transition duration-100 hover:bg-gray-700">
                Resume
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default BlogHeader;
