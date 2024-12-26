"use client";
import { useState } from "react";

import BrandLogo from "./brand-logo";
import { MdClose, MdMenu } from "react-icons/md";
import ActiveLink from "./active-link";

import Link from "next/link";

// HEADER COMPONENT
const Header = () => {
  const [open, setOpen] = useState(true);

  const menuItems = (
    <>
      <li>
        <ActiveLink href="/">Home</ActiveLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border">
      {/* DESKTOP NAV */}
      <div className="sticky top-0 z-20 hidden h-[80px] w-full items-center justify-between bg-green-50 px-10 lg:flex">
        {/* LOGO */}
        <Link href="/">
          <BrandLogo />
        </Link>
        <nav>
          <ul className="flex gap-4 font-semibold text-gray-700">{menuItems}</ul>
        </nav>
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
