import React, { forwardRef } from "react";
// import PropTypes from "prop-types";

const Loader = forwardRef((props, ref) => {
  return <div className="animate-loading absolute top-0 bottom-0 left-0 right-0" ref={ref}></div>;
});

Loader.displayName = "Loader";

Loader.propTypes = {};

export default Loader;
