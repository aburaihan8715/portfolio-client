'use client';
import { useState } from 'react';

import { MdClose, MdMenu } from 'react-icons/md';
// import ThemeToggleButton from './theme-toggle-button';
import HashLink from './hash-link';
import BrandLogo from './brand-logo';
import Container from './container';

// HEADER COMPONENT
const Header = () => {
  const [open, setOpen] = useState(true);

  const menuItems = (
    <>
      <li>
        <HashLink href="#about-me">About Me</HashLink>
      </li>
      {/* <li>
        <HashLink href="#experiences">Experience</HashLink>
      </li> */}
      <li>
        <HashLink href="#skills">Skills</HashLink>
      </li>
      <li>
        <HashLink href="#projects">Projects</HashLink>
      </li>
      <li>
        <HashLink href="#fun-facts">Fun Facts</HashLink>
      </li>
      <li>
        <HashLink href="#blogs">Blogs</HashLink>
      </li>
      <li>
        <HashLink href="#why">Why</HashLink>
      </li>
      <li>
        <HashLink href="#contact">Contact</HashLink>
      </li>
      {/* <li>
        <HashLink href="#achievements">Achievements</HashLink>
      </li> */}
    </>
  );

  return (
    <>
      {/* DESKTOP NAV */}
      <header className="sticky top-0 z-50 hidden bg-gray-900 shadow-[0px_1px_1px_rgba(255,255,255,0.3)] md:block">
        <Container>
          <nav className="flex h-[80px] w-full items-center justify-between px-2">
            {/* logo */}

            <HashLink href="#hero">
              <BrandLogo />
            </HashLink>

            {/* link items */}
            <ul className="flex gap-4 text-[18px] text-gray-300">
              {menuItems}
            </ul>

            {/* theme toggle and resume button */}
            <div className="flex gap-3 text-gray-300">
              {/* <ThemeToggleButton /> */}
              <a
                href="https://drive.google.com/uc?export=download&id=1hUgu5Q5hMynQQHTTK8_SdShK8-8HSx1D"
                target="_blank"
                className="rounded-md border border-gray-300 px-3 py-2 text-[18px] transition duration-100 hover:bg-gray-700"
              >
                Resume
              </a>
            </div>
          </nav>
        </Container>
      </header>

      {/* MOBILE NAV */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-[0px_1px_1px_rgba(255,255,255,0.3)] md:hidden">
        <Container>
          <nav className="">
            <div className="sticky top-0 flex h-[80px] w-full items-center justify-between px-2">
              <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 text-3xl text-gray-300"
              >
                {open ? <MdMenu /> : <MdClose />}
              </button>

              <div className="flex gap-3 text-gray-300">
                {/* <ThemeToggleButton /> */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1hUgu5Q5hMynQQHTTK8_SdShK8-8HSx1D"
                  target="_blank"
                  className="rounded-md border border-gray-300 px-3 py-2 text-[18px] transition duration-100 hover:bg-gray-700"
                >
                  Resume
                </a>
              </div>
            </div>

            <ul
              className={`fixed top-[80px] z-20 flex h-full w-[180px] -translate-x-[100%] flex-col gap-2 bg-gray-900/90 pl-8 pt-5 font-semibold text-gray-300 transition-transform duration-500 ${
                !open && 'translate-x-0'
              }`}
            >
              {menuItems}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
