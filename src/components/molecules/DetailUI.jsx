import React from "react";
import PropTypes from "prop-types";
import { allData } from "../../styles/_variables";

const DetailUI = ({ show, onShow, contentId }) => {
  const data = allData.filter((item) => item.id === contentId)[0];

  return (
    <div
      className={`w-screen h-screen fixed z-100 px-5 left-0 top-0 animate-fade overflow-y-auto flex flex-col items-center py-20 md:py-32 ${
        !show ? "hidden" : "block"
      }`}
      style={{ background: "rgba(41, 41, 41, 0.85)" }}
    >
      <img
        src="/img/close.svg"
        alt="close"
        className="w-5 h-5 fixed object-contain top-8 right-5 cursor-pointer md:top-16 md:right-16 md:w-10 md:h-10"
        onClick={onShow}
      />
      <div className="w-full max-w-5xl flex flex-col items-center">
        {data?.allImages?.map((item, i) => (
          <img key={i} src={item} alt="image" className="mb-10 max-w-full" />
        ))}
      </div>
    </div>
  );
};

DetailUI.propTypes = {
  show: PropTypes.bool,
  onShow: PropTypes.func,
  contentId: PropTypes.number,
};

export default DetailUI;
