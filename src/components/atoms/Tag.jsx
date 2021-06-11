import React from "react";
import PropTypes from "prop-types";

const Tag = ({ children, rotate }) => {
  if (rotate) {
    return (
      <>
        <div className="flex w-full bg-red-400 py-4 px-5 md:min-w-105 md:py-3.5 md:h-content lg:hidden">
          <h2 className="text-white font-mont-black text-4xl uppercase tracking-wider md:text-6xl">
            {children}
          </h2>
        </div>
        <div className="hidden h-full bg-red-400 items-center px-10 top-1 lg:flex lg:min-h-desktop">
          <img src="/img/PORTFOLIO.svg" alt="portfolio" className="w-7" />
        </div>
        {/* <div className="hidden absolute h-full bg-red-400 items-center px-10 top-1 lg:flex lg:right-10 lg:px-6 xl:right-36 xl:px-10">
          <img src="/img/PORTFOLIO.svg" alt="portfolio" className="w-7" />
        </div> */}
      </>
    );
  }
  return (
    <div className="w-full bg-red-400 py-4 px-5 md:w-105 md:py-3.5 md:h-content">
      <h2 className="text-white font-mont-black text-4xl uppercase tracking-wider md:text-6xl">
        {children}
      </h2>
    </div>
  );
};

Tag.propTypes = {};

export default Tag;
