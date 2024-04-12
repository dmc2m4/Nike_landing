import React from "react";
import Image from "next/image";

const NavBar = () => {
  const headerLogo = "/assets/images/nike.svg";
  const hamburger = "./assets/icons/hamburger.svg";
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="logo" width={90} height={29}></Image>
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-base text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
