import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const HomeScreenLayout = forwardRef(({ children }, ref) => {
  return (
    <div
      className="w-full h-screen max-h-desktop max-w-screen-2xl m-auto p-10 relative md:h-desktop md:pt-12 md:px-0"
      ref={ref}
    >
      {children}
    </div>
  );
});

HomeScreenLayout.displayName = "HomeScreenLayout";

HomeScreenLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeScreenLayout;
