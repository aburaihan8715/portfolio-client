"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children, className = "", onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span onClick={onClick} className={`${isActive ? "text-cyan-500" : ""} hover:text-cyan-500 transition duration-100 ${className}`}>
        {children}
      </span>
    </Link>
  );
};

export default ActiveLink;
