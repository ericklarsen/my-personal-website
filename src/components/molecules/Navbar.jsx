import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center absolute left-0 px-10">
      <div className="flex flex-row">
        <img src="/img/github_icon.png" alt="github" />
        <img className="ml-5" src="/img/linkedin_icon.png" alt="linkedin" />
      </div>
      <img src="/img/menu_icon.png" alt="menu" />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;