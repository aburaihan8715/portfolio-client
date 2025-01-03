"use client";

import { ReactNode, useEffect, useState } from "react";

interface HashLinkProps {
  href: string; // Should include the hash, e.g., "#section1"
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const HashLink: React.FC<HashLinkProps> = ({ href, children, className = "", onClick }) => {
  const [currentHash, setCurrentHash] = useState<string>("");

  // Update `currentHash` whenever the hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange(); // Set initial hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isHash = currentHash === href;

  return (
    <a href={href} onClick={onClick} className={`${isHash ? "text-cyan-500" : ""} hover:text-cyan-500 transition duration-100 ${className}`}>
      {children}
    </a>
  );
};

export default HashLink;
