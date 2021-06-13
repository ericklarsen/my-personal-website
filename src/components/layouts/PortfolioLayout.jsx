import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const PortfolioLayout = forwardRef(({ children }, ref) => {
  return (
    <div
      id="portfolio"
      ref={ref}
      className="w-full max-w-screen-2xl m-auto relative lg:min-h-desktop lg:px-10 lg:flex lg:items-center lg:flex-row-reverse lg:justify-between xl:px-35 "
    >
      {children}
    </div>
  );
});

PortfolioLayout.displayName = "PortfolioLayout";

PortfolioLayout.propTypes = {
  children: PropTypes.node,
};

export default PortfolioLayout;
