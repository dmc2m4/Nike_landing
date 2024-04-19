import React from "react";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";

const NavBar = () => {
  const headerLogo = "/assets/images/nike.svg";
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-around items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="logo" width={90} height={29}></Image>
        </a>
        <div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
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
        </div>
        <div className="hidden max-lg:block">
          <HiBars3 size="3em" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
