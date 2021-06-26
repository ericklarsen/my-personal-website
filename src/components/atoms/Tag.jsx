import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Tag = ({ children, rotate }) => {
  if (rotate) {
    return (
      <>
        <div className="flex w-full bg-maroon py-4 px-5 md:min-w-105 md:py-3.5 md:h-content relative z-20 lg:hidden">
          <h2 className="text-white font-mont-black text-4xl uppercase tracking-wider md:text-6xl">
            {children}
          </h2>
        </div>
        <div className="hidden h-full bg-maroon items-center px-10 top-1 lg:flex lg:min-h-desktop">
          <Image
            src="/img/PORTFOLIO.svg"
            alt="portfolio"
            className="w-7"
            width={28}
            height={267.91}
          />
        </div>
      </>
    );
  }
  return (
    <div className="w-full bg-maroon py-4 px-5 md:w-105 md:py-3.5 md:h-content relative z-20">
      <h2 className="text-white font-mont-black text-4xl uppercase tracking-wider md:text-6xl">
        {children}
      </h2>
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  rotate: PropTypes.bool,
};

export default Tag;
