import React from "react";
import PropTypes from "prop-types";
import AboutMeLayout from "../layouts/AboutMeLayout";
import Tag from "../atoms/Tag";

const AboutMeScreen = (props) => {
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
    <AboutMeLayout>
      <Tag>
          About<br/>Me.
      </Tag>

      <div className="w-full px-10 box-border">
        <p className="text-white font-mont-regular mt-10 leading-loose">
          Hey what's up!
          <br /> My name is Erick and I’m currently working as a FrontEnd Developer. My competencies
          are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn
          and take new challenge.
        </p>

        <div className=" w-full py-2 mt-12 bg-red-400 ">
          <h3 className="text-white font-mont-black uppercase tracking-widest w-full text-center text-lg ">
            Work Experiences
          </h3>
        </div>

        {data.map((item, i) => (
          <div key={i} className="w-full mt-6">
            <p className="text-white font-mont-regular text-xs tracking-wide">{item.date}</p>
            <h4 className="text-white font-mont-bold text-lg tracking-wide italic my-2">{item.position}</h4>
            <div className="w-full flex items-center">
              <img src="/img/location_icon.png" alt="location" className="mr-2" />
              <p className="text-white font-mont-regular text-xs tracking-wide">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </AboutMeLayout>
  );
};

AboutMeScreen.propTypes = {};

export default AboutMeScreen;
