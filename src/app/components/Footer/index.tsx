import React from "react";
import Image from "next/image";
import { socialMedia, footerLinks } from "@/app/constants/constants";

const Footer = () => {
  const footerLog = "/assets/images/footer-logo.svg";
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <Image
              src={footerLog}
              alt="footer-logo"
              width={150}
              height={46}
            ></Image>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((platform) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <Image
                  src={platform.src}
                  alt={platform.alt}
                  width={24}
                  height={24}
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 text-base font-montserrat leading-normal hover:text-slate-gray">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
