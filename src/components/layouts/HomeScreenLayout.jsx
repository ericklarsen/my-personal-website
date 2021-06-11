import React from "react";
import PropTypes from "prop-types";

const HomeScreenLayout = ({ children }) => {
  return <div className="w-full h-screen max-h-desktop max-w-screen-2xl m-auto p-10 relative md:h-desktop md:pt-12 md:px-0">{children}</div>;
};

HomeScreenLayout.propTypes = {};

export default HomeScreenLayout;
