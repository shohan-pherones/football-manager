import { navLinks } from "@/data/navLinks";
import { navLinkType } from "@/types/navLink";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="h-20 border-b flex items-center">
      <nav className="container mx-auto flex justify-between gap-5">
        <Link href="/">
          <SectionTitle title="Football Manager" fromTheLogo />
        </Link>
        <ul className="flex items-center gap-5">
          {navLinks.map((navLink: navLinkType) => (
            <NavLink key={navLink.route} navLink={navLink} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
