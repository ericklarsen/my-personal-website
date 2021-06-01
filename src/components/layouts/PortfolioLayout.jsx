import React from "react";
import PropTypes from "prop-types";

const PortfolioLayout = ({ children }) => {
  return <div className="w-full min-h-screen pb-10 relative">{children}</div>;
};

PortfolioLayout.propTypes = {};

export default PortfolioLayout;
