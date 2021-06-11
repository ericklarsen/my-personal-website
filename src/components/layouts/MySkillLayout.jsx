import React from "react";
import PropTypes from "prop-types";

const MySkillLayout = ({ children }) => {
  return <div className="w-full h-content max-w-screen-2xl m-auto pb-10 relative md:min-h-desktop md:flex md:items-center md:justify-between 2xl:px-28">{children}</div>;
};

MySkillLayout.propTypes = {};

export default MySkillLayout;
