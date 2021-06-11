import React from "react";
import PropTypes from "prop-types";

const AboutMeLayout = ({ children }) => {
  return <div className="w-full h-content max-w-screen-2xl m-auto pb-10 relative md:px-10 md:py-16 lg:px-16 xl:px-35 xl:py-32 2xl:px-28">{children}</div>;
};

AboutMeLayout.propTypes = {};

export default AboutMeLayout;
