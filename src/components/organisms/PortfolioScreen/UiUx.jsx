import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const UiUx = (props) => {
  const ref = useRef();
  const [move, setMove] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [distX, setDistX] = useState(0);
  const [distY, setDistY] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");
  const threshold = 10;
  const restraint = 100;
  const allowedTime = 300;
  const maxMove = 50;

  const rightMove = () => {
    setMove(-50);
  };

  const leftMove = () => {
    setMove(0);
  };

  const onTouchEnd = (e) => {
    var touchobj = e.changedTouches[0];
    var distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
    var distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
    var elapsedTime = new Date().getTime() - startTime; // get time elapsed
    if (elapsedTime <= allowedTime) {
      // first condition for awipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        // 2nd condition for horizontal swipe met
        setSwipeDirection(distX < 0 ? "left" : "right"); // if dist traveled is negative, it indicates left swipe
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        // 2nd condition for vertical swipe met
        setSwipeDirection(distY < 0 ? "up" : "down"); // if dist traveled is negative, it indicates up swipe
      }
    }
  };

  const onTouchStart = (e) => {
    var touchobj = e.changedTouches[0];

    setStartX(touchobj.pageX);
    setStartY(touchobj.pageY);
    setStartTime(new Date().getTime());
    setSwipeDirection("none");
  };

  useEffect(() => {
    if (swipeDirection == "left") {
      if (Math.abs(move) < maxMove) {
        setMove((prev) => prev + -50);
      }
    } else if (swipeDirection == "right") {
      if (Math.abs(move) != 0) {
        setMove((prev) => prev + 50);
      }
    }
  }, [swipeDirection]);

  console.log(swipeDirection);
  console.log(move);

  return (
    <>
      <div
        className="flex w-max transition-all duration-300 animate-fade"
        style={{ transform: `translateX(${move}%)` }}
        onTouchEnd={(e) => onTouchEnd(e)}
        onTouchStart={(e) => onTouchStart(e)}
      >
        <div className="w-screen px-10">
          <div ref={ref} className="w-full grid grid-cols-1 gap-5 my-10">
            <div className="w-full bg-white opacity-10 h-56 rounded-2xl"></div>
            <div className="w-full bg-white opacity-10 h-56 rounded-2xl"></div>
          </div>
        </div>

        <div className="w-screen px-10">
          <div ref={ref} className="w-full grid grid-cols-1 gap-5 my-10">
            <div className="w-full bg-white opacity-10 h-56 rounded-2xl"></div>
            <div className="w-full bg-white opacity-10 h-56 rounded-2xl"></div>
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

UiUx.propTypes = {};

export default UiUx;
