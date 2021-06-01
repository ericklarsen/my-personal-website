import React from "react";
import PropTypes from "prop-types";
import Footer from "../organisms/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-b from-dark-200  to-dark-500 overflow-x-hidden">
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
