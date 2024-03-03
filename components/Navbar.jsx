"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
export const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Skills",
    href: "/skills",
  },
  {
    id: 4,
    title: "Projects",
    href: "/projects",
  },
  // {
  //   id: 5,
  //   title: "Resume",
  //   href: "/resume",
  // },
  {
    id: 6,
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a
            style={{
              color: "rgb(86 81 229 / var(--tw-text-opacity))",
              fontFamily: "",
              fontSize: "60px",
              fontWeight: "bolder",
              marginLeft: "10px",
              letterSpacing: "-6px",
            }}
          >
            MT
          </a>
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}`, marginRight: "20px" }}
            className="hidden md:flex"
          >
            {links.map((link) => {
              return (
                <li
                  className={
                    router.pathname === link.href
                      ? "ml-10 text-sm uppercase active"
                      : "ml-10 text-sm uppercase hover:border-b"
                  }
                  key={link.id}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a
                  style={{
                    color: "rgb(86 81 229 / var(--tw-text-opacity))",
                    fontFamily: "",
                    fontSize: "60px",
                    fontWeight: "bolder",
                    marginLeft: "10px",
                    letterSpacing: "-6px",
                  }}
                >
                  MT
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((link) => {
                return (
                  <Link href={link.href} key={link.id}>
                    <li
                      onClick={() => setNav(false)}
                      className={
                        router.pathname === link.href
                          ? "py-4 text-sm active2"
                          : "py-4 text-sm"
                      }
                    >
                      {link.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div style={{ paddingTop: "80px" }}>
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/mustafa-tantawi12/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/motantawi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
