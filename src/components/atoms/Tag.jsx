import React from "react";
import PropTypes from "prop-types";

const Tag = ({ children }) => {
  return (
    <div className="w-full bg-red-400 py-4 px-10">
      <h2 className="text-white font-mont-black text-4xl uppercase tracking-wider">{children}</h2>
    </div>
  );
};

Tag.propTypes = {};

export default Tag;
