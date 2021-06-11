import React, { useState } from "react";
import PropTypes from "prop-types";
import BottomSheet from "../atoms/BottomSheet";

const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const onChangeShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center absolute left-0 px-10 xl:px-35 2xl:px-28">
        <div className="flex flex-row">
          <img src="/img/github_icon.svg" alt="github" />
          <img className="ml-5" src="/img/linkedin_icon.svg" alt="linkedin" />
        </div>
        <img src="/img/menu_icon.svg" alt="menu" className="lg:hidden" onClick={onChangeShow} />
        <div className="hidden flex-row items-center lg:flex">
          <h5 className="font-mont-extra-bold text-red-400 text-lg tracking-wider mr-11 cursor-pointer">
            About Me.
          </h5>
          <h5 className="font-mont-extra-bold text-white text-lg tracking-wider mr-11 cursor-pointer">
            My Skills.
          </h5>
          <h5 className="font-mont-extra-bold text-white text-lg tracking-wider mr-11 cursor-pointer">
            Portfolio.
          </h5>
          <img src="/img/chat_icon.svg" alt="chat" className="cursor-pointer" />
        </div>
      </div>
      <BottomSheet show={show} onShow={onChangeShow}>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-mont-extra-bold text-red-400 text-sm tracking-widest mb-9">About Me</p>
          <p className="font-mont-extra-bold text-white text-sm tracking-widest mb-9">My Skills</p>
          <p className="font-mont-extra-bold text-white text-sm tracking-widest mb-9">Portfolio</p>
          <img src="/img/chat_icon.svg" alt="chat" className="w-7" />
        </div>
      </BottomSheet>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
