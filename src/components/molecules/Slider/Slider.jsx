import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SliderContainer from "./SliderContainer";
import SliderBubbleButton from "./SliderBubbleButton";
import UseIsMobile from "../../../hooks/UseIsMobile";

const Slider = ({ data, children }) => {
  const [move, setMove] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");
  const threshold = 50;
  const restraint = 100;
  const allowedTime = 300;
  const maxMove = 100;

  const [totalSlides, setTotalSlides] = useState(1);
  const [activeSlide, setActiveSlide] = useState(1);

  const isMobile = UseIsMobile();

  const rightMove = () => {
    var valuePerMove = -100 / totalSlides;
    if (Math.abs(move + valuePerMove) < maxMove) {
      setMove((prev) => prev + valuePerMove);
      setActiveSlide((prev) => prev + 1);
    }
  };

  const leftMove = () => {
    var valuePerMove = -100 / totalSlides;
    if (Math.abs(move) !== 0) {
      setMove((prev) => prev - valuePerMove);
      setActiveSlide((prev) => prev - 1);
    }
  };

  const bubbleMove = (index) => {
    var valuePerMove = -100 / totalSlides;
    setMove(index * valuePerMove);
    setActiveSlide(index + 1);
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
    var valuePerMove = -100 / totalSlides;

    if (swipeDirection == "left") {
      if (Math.abs(move + valuePerMove) < maxMove) {
        setMove((prev) => prev + valuePerMove);
        setActiveSlide((prev) => prev + 1);
      }
    } else if (swipeDirection == "right") {
      if (Math.abs(move) !== 0) {
        setMove((prev) => prev - valuePerMove);
        setActiveSlide((prev) => prev - 1);
      }
    }
  }, [swipeDirection]);

  useEffect(() => {
    if (isMobile) {
      setTotalSlides(Math.ceil(data.length / 2));
    } else {
      setTotalSlides(Math.ceil(data.length / 4));
    }
  }, [isMobile]);

  return (
    <>
      <SliderContainer
        style={{ transform: `translateX(${move}%)` }}
        onTouchEnd={(e) => onTouchEnd(e)}
        onTouchStart={(e) => onTouchStart(e)}
      >
        {children}
      </SliderContainer>
      <SliderBubbleButton
        totalSlides={totalSlides}
        activeSlide={activeSlide}
        leftMove={leftMove}
        rightMove={rightMove}
        bubbleMove={bubbleMove}
      />
    </>
  );
};

Slider.propTypes = { data: PropTypes.array, children: PropTypes.node };

export default Slider;
