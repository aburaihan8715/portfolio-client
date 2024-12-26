"use client";
import Link from "next/link";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="border">
      <div className="w-full sm:max-w-6xl mx-auto">
        {/*======== scroll to top button start===== */}
        {/* that is not the part of footer */}
        <ScrollToTop
          smooth
          color="#fff"
          style={{ background: "#F43F5E", display: "flex", justifyContent: "center", padding: "10px", zIndex: "1000" }}
        />
        {/*======== scroll to top button end===== */}
        <footer className="footer footer-center p-10  text-base-content rounded">
          <div className="grid grid-cols-2 sm:grid-flow-col gap-4">
            <>
              <a href="#about" className="link link-hover">
                About
              </a>
              <a href="#projects" className="link link-hover">
                Projects
              </a>
              <a href="#contact" className="link link-hover">
                Contact
              </a>
            </>

            <Link href="/blogs" className="link link-hover">
              Blogs
            </Link>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              {/* github */}
              <a
                className="text-2xl text-sky-600 ring-2 p-2 rounded-full hover:opacity-50 transition-all duration-75 inline-block"
                href="https://github.com/aburaihan8715"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <SiGithub />
                </span>
              </a>
              {/* facebook */}
              <a
                className="text-2xl text-red-700 ring-2 p-2 rounded-full hover:opacity-50 transition-all duration-75 inline-block"
                href="https://www.facebook.com/profile.php?id=100069502851396"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <SiFacebook />
                </span>
              </a>
              {/* linkedin */}
              <a
                className="text-2xl text-blue-800 ring-2 p-2 rounded-full hover:opacity-50 transition-all duration-75 inline-block"
                href="https://www.linkedin.com/in/mdaburaihan3331/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <SiLinkedin />
                </span>
              </a>
            </div>
          </div>
          <div>
            <p>{`Copyright © ${new Date().toLocaleDateString("de-DE")} - All right reserved by Md Abu Raihan`}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
