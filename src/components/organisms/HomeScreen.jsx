import React from "react";
import Image from "next/image";
// import PropTypes from "prop-types";
import HomeScreenLayout from "../layouts/HomeScreenLayout";
import Navbar from "../molecules/Navbar";

const HomeScreen = () => {
  return (
    <HomeScreenLayout>
      <Navbar />
      <div className="pointer-events-none absolute top-0 -left-24 transform scale-125 md:scale-75 md:-left-1/4 md:-top-14">
        <Image src="/img/Overlay.svg" alt="overlay" width={1300} height={316} />
      </div>
      <div className="pointer-events-none absolute -bottom-2 -right-24 transform scale-125 md:scale-75 md:-right-1/4 md:-bottom-14">
        <Image src="/img/Overlay.svg" alt="overlay" width={1300} height={316} />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center animate-fade">
        <div className="w-max">
          <p className="text-white font-mont-regular tracking-wide italic text-sm md:text-2xl">
            {`Hi, I'm`}
          </p>
          <h1 className="text-white font-mont-black italic text-6xl my-2 tracking-wider md:text-8xl">
            ERICK
            <br />
            LARSEN
          </h1>
          <p className="text-white font-mont-regular tracking-wide italic text-sm md:text-2xl">
            Welcome to my personal website!
          </p>
        </div>
      </div>
    </HomeScreenLayout>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
