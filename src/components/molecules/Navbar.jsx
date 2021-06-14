import React, { useState } from "react";
// import PropTypes from "prop-types";
import BottomSheet from "../atoms/BottomSheet";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const onChangeShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center absolute left-0 px-10 xl:px-35 2xl:px-28">
        <div className="flex flex-row">
          <a href="https://github.com/ericklarsen" target="blank">
            <img src="/img/github_icon.svg" alt="github" className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/ericklarsenn/" target="blank">
            <img className="ml-5 cursor-pointer" src="/img/linkedin_icon.svg" alt="linkedin" />
          </a>
        </div>
        <img src="/img/menu_icon.svg" alt="menu" className=" md:hidden" onClick={onChangeShow} />
        <div className="hidden flex-row items-center md:flex">
          <a
            href="#about"
            className="font-mont-extra-bold text-maroon text-lg tracking-wider mr-11 cursor-pointer"
          >
            About Me.
          </a>
          <a
            href="#myskill"
            className="font-mont-extra-bold text-white text-lg tracking-wider mr-11 cursor-pointer transition-all hover:text-maroon"
          >
            My Skills.
          </a>
          <a
            href="#portfolio"
            className="font-mont-extra-bold text-white text-lg tracking-wider mr-11 cursor-pointer transition-all hover:text-maroon"
          >
            Portfolio.
          </a>
          <img src="/img/chat_icon.svg" alt="chat" className="cursor-pointer" />
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
          <img src="/img/chat_icon.svg" alt="chat" className="w-7" />
        </div>
      </BottomSheet>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
