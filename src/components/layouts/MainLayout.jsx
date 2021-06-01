import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="w-full bg-gradient-to-b from-dark-200  to-dark-500 overflow-x-hidden">{children}</div>;
};

Layout.propTypes = {};

export default Layout;
