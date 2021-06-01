import React from "react";
import PropTypes from "prop-types";

const HomeScreenLayout = ({ children }) => {
  return <div className="w-full h-screen p-10 relative">{children}</div>;
};

HomeScreenLayout.propTypes = {};

export default HomeScreenLayout;
