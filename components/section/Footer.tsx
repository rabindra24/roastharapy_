"use client";
import React from "react";
import { footer } from "@/constants/constant";
import { logo } from "@/public/images/images";
import Image from "next/image";
import { Button } from "../ui/button";
import { nightlogo } from "@/public/images/images";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <footer className=" body-font" id="footer">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center mb-10">
            {theme === "dark" ? (
              <Image
                className="h-14 w-auto"
                src={nightlogo}
                alt="advertising"
              />
            ) : (
              <Image className="h-14 w-auto" src={logo} alt="advertising" />
            )}
          </div>
          <Link href={"#contact"}>
            <Button className="rounded-full">Contact Us</Button>
          </Link>
        </div>

        <ul className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center space-y-2">
          {footer.map((item, idx) => (
            <li
              className="lg:w-1/3 md:w-1/2 w-full px-4 font-medium list-none"
              key={idx}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className=" text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Developed By RoasTharapy —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              @RoasTharapy
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className=""
              href="https://www.instagram.com/rabindra_nath_mahat01/"
              title="instagram"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 "
              href="https://www.instagram.com/rabindra_nath_mahat01/"
              title="facebook"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3"
              href="https://www.linkedin.com/in/rabindra-nath-mahato-702864246/"
              title="linkedin"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
