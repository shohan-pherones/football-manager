"use client";

import { navLinkType } from "@/types/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ navLink }: { navLink: navLinkType }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={navLink.route}
        className={`${
          pathname === navLink.route ? "text-black" : "text-gray-500"
        } hover:text-black transition`}
      >
        {navLink.label}
      </Link>
    </li>
  );
};

export default NavLink;
