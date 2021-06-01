import React from "react";
import PropTypes from "prop-types";

const MySkillLayout = ({ children }) => {
  return <div className="w-full min-h-screen pb-10 relative">{children}</div>;
};

MySkillLayout.propTypes = {};

export default MySkillLayout;
