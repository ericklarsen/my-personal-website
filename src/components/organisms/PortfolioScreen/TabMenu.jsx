import React from "react";
import PropTypes from "prop-types";

const TabMenu = (props) => {
  return (
    <div className="flex flex-shrink-0 justify-center">
      <div className="mr-8">
        <h6 className="font-mont-bold text-white text-lg">UI/UX</h6>
        <div className="w-10 h-1 bg-red-600 mt-0.5 float-right"></div>
      </div>
      <div className="">
        <h6 className="font-mont-bold text-white text-lg">Web Project</h6>
        {/* <div className="w-10 h-1 bg-red-600 mt-0.5 float-right"></div> */}
      </div>
    </div>
  );
};

TabMenu.propTypes = {};

export default TabMenu;
