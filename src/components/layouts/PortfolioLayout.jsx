import React from "react";
import PropTypes from "prop-types";

const PortfolioLayout = ({ children }) => {
  return <div className="w-full max-w-screen-2xl m-auto relative lg:min-h-desktop lg:px-10 lg:flex lg:items-center lg:flex-row-reverse lg:justify-between xl:px-35 ">{children}</div>;
};

PortfolioLayout.propTypes = {};

export default PortfolioLayout;
