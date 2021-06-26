import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import Image from "next/image";
import BottomSheet from "../atoms/BottomSheet";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const onChangeShow = () => {
    setShow(!show);
  };

  const darkmode = () => {
    const theme = localStorage.theme;
    if (!theme || theme !== "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "default";
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center absolute left-0 px-10 xl:px-35 2xl:px-28">
        <div className="flex flex-row">
          <a href="https://github.com/ericklarsen" target="blank">
            <div className="cursor-pointer transition-all transform hover:opacity-50 hover:scale-110">
              <Image src="/img/github_icon.svg" alt="github" width={36} height={36} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ericklarsenn/" target="blank">
            <div className="ml-5 cursor-pointer transition-all transform hover:opacity-50 hover:scale-110">
              <Image src="/img/linkedin_icon.svg" alt="linkedin" width={36} height={36} />
            </div>
          </a>
        </div>
        <div className="md:hidden">
          <Image
            src="/img/menu_icon.svg"
            alt="menu"
            width={20}
            height={15}
            onClick={onChangeShow}
          />
        </div>
        <div className="hidden flex-row items-center md:flex">
          <a
            href="#about"
            className="font-mont-extra-bold text-maroon text-lg tracking-wider mr-11 cursor-pointer "
          >
            About Me.
          </a>
          <a
            href="#myskill"
            className="font-mont-extra-bold text-white text-lg tracking-wider mr-11 cursor-pointer transition-all hover:text-maroon "
          >
            My Skills.
          </a>
          <a
            href="#portfolio"
            className="font-mont-extra-bold text-white text-lg tracking-wider mr-11 cursor-pointer transition-all hover:text-maroon"
          >
            Portfolio.
          </a>
          <div className="cursor-pointer transition-all transform hover:opacity-50 hover:scale-110">
            <Image src="/img/chat_icon.svg" alt="chat" width={36} height={35} onClick={darkmode} />
          </div>
        </div>
      </div>
      <BottomSheet show={show} onShow={onChangeShow}>
        <div className="w-full flex flex-col items-center justify-center">
          <a
            href="#about"
            onClick={onChangeShow}
            className="font-mont-extra-bold text-red-400 text-sm tracking-widest mb-9"
          >
            About Me
          </a>
          <a
            href="#myskill"
            onClick={onChangeShow}
            className="font-mont-extra-bold text-white text-sm tracking-widest mb-9"
          >
            My Skills
          </a>
          <a
            href="#portfolio"
            onClick={onChangeShow}
            className="font-mont-extra-bold text-white text-sm tracking-widest mb-9"
          >
            Portfolio
          </a>
          <div className="relative w-7 h-7">
            <Image src="/img/chat_icon.svg" alt="chat" layout="fill" />
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
