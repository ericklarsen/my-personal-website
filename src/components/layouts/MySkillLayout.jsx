import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const MySkillLayout = forwardRef(({ children }, ref) => {
  return (
    <div
      id="myskill"
      ref={ref}
      className={`w-full h-content max-w-screen-2xl m-auto pb-10 relative md:min-h-desktop md:flex md:items-center md:justify-between 2xl:px-28 transition-all`}
    >
      {children}
    </div>
  );
});

MySkillLayout.displayName = "MySkillLayout";

MySkillLayout.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
};

export default MySkillLayout;
