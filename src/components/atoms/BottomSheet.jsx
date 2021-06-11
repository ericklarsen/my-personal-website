import React from "react";
import PropTypes from "prop-types";

const BottomSheet = ({ children, show, onShow }) => {
  if (show) {
    return (
      <>
        <div
          className="md:hidden w-screen h-screen fixed z-10 left-0 top-0 animate-fade"
          style={{ background: "rgba(41, 41, 41, 0.85)" }}
        ></div>
        <div
          className="md:hidden w-screen fixed h-content p-12 pt-16 bg-white bottom-0 left-0 z-20 rounded-t-3xl bg-gradient-to-b from-dark-200  to-dark-500 animate-bottomsheet"
          style={{ borderTop: `1px solid rgba(255, 255, 255, 0.17)` }}
        >
          <div
            className="absolute h-1 w-28 bg-white opacity-10 m-auto top-4 left-1/2"
            style={{ marginLeft: "-55px" }}
          ></div>
          <img src="/img/close.svg" alt="close" className="absolute right-5 top-4" onClick={onShow} />
          {children}
        </div>
      </>
    );
  }

  return <div></div>;
};

BottomSheet.propTypes = {};

export default BottomSheet;
