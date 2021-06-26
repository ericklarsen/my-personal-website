import React from "react";
// import PropTypes from "prop-types";
import Image from "next/image";
import AboutMeLayout from "../layouts/AboutMeLayout";
import Tag from "../atoms/Tag";
import { UseElementOnScreen } from "../../hooks/UseElementOnScreen";

const AboutMeScreen = () => {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const data = [
    {
      date: "April 2021 - Current",
      position: "2Viz - FrontEnd Developer",
      location: "Frankfurt, Hesse, Germany (Remote)",
    },
    {
      date: "September 2020 - April 2021",
      position: "FOOD.ID - FrontEnd Developer",
      location: "South Jakarta, Indonesia (Remote)",
    },
    {
      date: "October 2018 - September 2020",
      position: "Self Employed - Fullstack Developer",
      location: "Pekanbaru, Indonesia",
    },
  ];

  return (
    <AboutMeLayout ref={containerRef}>
      <Tag>
        About
        <br />
        Me.
      </Tag>
      <div className="absolute top-0 -right-64 z-10 lg:-right-56 lg:top-48 animate-spin-slow">
        <Image
          src="/img/react_overlay.svg"
          alt="react"
          width={509}
          height={505}
          className="transform scale-75 lg:scale-100"
          placeholder="blur"
          blurDataURL="/img/react_overlay.svg"
        />
      </div>

      <div className="absolute top-1/4 -left-36 z-10 transform scale-75 lg:scale-100 lg:top-0 lg:-left-28 animate-pulse">
        <Image
          src="/img/html_overlay.svg"
          alt="html"
          width={351}
          height={457}
          placeholder="blur"
          blurDataURL="/img/html_overlay.svg"
        />
      </div>

      <div className="absolute -bottom-20 -right-2/4 z-10 transform scale-75 lg:scale-100 lg:-right-28 animate-pulse">
        <Image
          src="/img/next_overlay.svg"
          alt="nextjs"
          width={549}
          height={330}
          placeholder="blur"
          blurDataURL="/img/next_overlay.svg"
        />
      </div>
      <div
        className={`w-full px-10 box-border md:px-0 md:max-w-3xl transition-all z-20 relative duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white font-mont-regular mt-10 leading-loose md:mt-6 md:text-lg md:leading-loose">
          {`Hey what's up!`}
          <br />
          My name is Erick, currently working as a FrontEnd Developer.
          <br />
          My competencies are on React, Redux, Next JS, Javascript and also UI/UX.
          <br />I am always enthusiastic to learn and take new challenges.
        </p>

        <div className=" w-full py-2 mt-12 bg-maroon md:w-105 md:px-5 md:mt-24">
          <h3 className="text-white font-mont-black uppercase tracking-widest w-full text-center text-lg md:w-max md:text-2xl">
            Work Experiences
          </h3>
        </div>

        {data.map((item, i) => (
          <div key={i} className="w-full mt-6 md:mt-9">
            <p className="text-white font-mont-regular text-xs tracking-wide md:text-base">
              {item.date}
            </p>
            <h4 className="text-white font-mont-bold text-lg tracking-wide italic my-2 md:text-2xl md:my-3.5">
              {item.position}
            </h4>
            <div className="w-full flex items-center">
              <div className="relative mr-2 w-4 h-4 md:w-6 md:h-6">
                <Image
                  src="/img/location_icon.svg"
                  alt="location"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-white font-mont-regular text-xs tracking-wide md:text-base">
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AboutMeLayout>
  );
};

AboutMeScreen.propTypes = {};

export default AboutMeScreen;
