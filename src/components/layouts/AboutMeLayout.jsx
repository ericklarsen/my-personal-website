import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const AboutMeLayout = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="about"
      className="w-full h-content max-w-screen-2xl m-auto pb-10 relative md:px-10 md:py-16 lg:px-16 xl:px-35 xl:py-32 2xl:px-28"
    >
      {props.children}
    </div>
  );
});

AboutMeLayout.displayName = "AboutMeLayout";

AboutMeLayout.propTypes = {
  children: PropTypes.node,
};

export default AboutMeLayout;
