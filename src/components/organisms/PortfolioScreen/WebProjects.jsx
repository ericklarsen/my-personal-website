import React, { useState } from "react";
import PropTypes from "prop-types";

const WebProjects = (props) => {
  const [move, setMove] = useState(0);

  const leftMove = () => {
    console.log("");
  };

  const rightMove = () => {
    console.log("");
  };

  const elipsis = {
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "break-word",
  };

  return (
    <>
      <div
        className="flex w-max transition-all duration-300 animate-fade"
        style={{ transform: `translateX(${move}%)` }}
        // onTouchEnd={(e) => onTouchEnd(e)}
        // onTouchStart={(e) => onTouchStart(e)}
      >
        <div className="w-screen px-10">
          <div className="w-full grid grid-cols-1 gap-5 my-10">
            <div className="w-full border-2 border-white border-opacity-20  rounded-2xl p-5">
              <h5 className="text-white font-mont-bold tracking-wide text-lg">
                Academic Website - 2019
              </h5>
              <p className="text-white font-mont-regular tracking-wide text-xs italic mt-1.5 mb-5">
                Built with CodeIgniter, PHP and MySQL
              </p>
              <p className="text-white font-mont-regular tracking-wide text-xs leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet lorem ipsum
                tristique. Quis vulputate id metus scelerisque iaculis mauris magna amet Quis
                vulputate id metus scelerisque iaculis mauris magna amet na amet Quis vulputate id
                metus scelerisque iaculis mauris magna amet
              </p>
            </div>

            <div className="w-full border-2 border-white border-opacity-20  rounded-2xl p-5">
              <h5 className="text-white font-mont-bold tracking-wide text-lg">
                Academic Website - 2019
              </h5>
              <p className="text-white font-mont-regular tracking-wide text-xs italic mt-1.5 mb-5">
                Built with CodeIgniter, PHP and MySQL
              </p>
              <p className="text-white font-mont-regular tracking-wide text-xs leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet lorem ipsum
                tristique. Quis vulputate id metus scelerisque iaculis mauris magna amet Quis
                vulputate id metus scelerisque iaculis mauris magna amet na amet Quis vulputate id
                metus scelerisque iaculis mauris magna amet
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-shrink-0">
        <img src="/img/leftArrow.png" alt="left arrow" onClick={leftMove} />
        <div className="flex mx-8 ">
          <div className="w-3 h-3 rounded-full bg-white opacity-50 mr-2.5"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-25"></div>
        </div>
        <img src="/img/rightArrow.png" alt="right arrow" onClick={rightMove} />
      </div>
    </>
  );
};

WebProjects.propTypes = {};

export default WebProjects;
