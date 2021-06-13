import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const FooterLayout = forwardRef(({ children }, ref) => {
  return (
    <div className="w-full relative" ref={ref}>
      {children}
    </div>
  );
});

FooterLayout.displayName = "FooterLayout";

FooterLayout.propTypes = {
  children: PropTypes.node,
};

export default FooterLayout;
