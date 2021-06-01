import React from "react";
import PropTypes from "prop-types";
import HomeScreenLayout from "../layouts/HomeScreenLayout";
import Navbar from "../molecules/Navbar";

const HomeScreen = (props) => {
  return (
    <HomeScreenLayout>
      <Navbar />
      <img src="/img/Overlay.png" alt="overlay" className="absolute top-0 -left-24 transform scale-125" />
      <img src="/img/Overlay.png" alt="overlay" className="absolute -bottom-2 -right-24 transform scale-125" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-max">
          <p className="text-white font-mont-regular tracking-wide italic text-sm">Hi, I'm</p>
          <h1 className="text-white font-mont-black italic text-6xl my-2 tracking-wider">ERICK<br/>LARSEN</h1>
          <p className="text-white font-mont-regular tracking-wide italic text-sm">Welcome to my personal website!</p>
        </div>
      </div>
    </HomeScreenLayout>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
