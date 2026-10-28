import React, { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const renderLinks = (mobile = false) => (
    <ul className={`flex ${mobile ? "flex-col" : "flex-row"} gap-6`}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={() => setToggle(false)}
            className="text-sm font-medium text-white/80 transition hover:text-amber-200 sm:text-base"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} fixed top-0 z-20 w-full border-b border-white/10 bg-[#100e0c]/90 py-4 backdrop-blur-md`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white sm:text-xl">
          VAL <span className="font-light text-amber-200">PHOTOGRAPHY</span>
        </a>

        <div className="hidden sm:block">{renderLinks()}</div>

        <div className="relative sm:hidden">
          <button
            type="button"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            onClick={() => setToggle((open) => !open)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <img src={toggle ? close : menu} alt="" className="h-5 w-6 object-contain" />
          </button>
          {toggle && (
            <div className="absolute right-0 top-12 min-w-40 rounded-xl border border-white/10 bg-[#171412] p-5 shadow-xl">
              {renderLinks(true)}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
