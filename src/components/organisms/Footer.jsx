import React from "react";
import PropTypes from "prop-types";
import FooterLayout from "../layouts/FooterLayout";

const Footer = (props) => {
  return (
    <FooterLayout>
      <div className="bg-red-400 w-full p-9 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl uppercase font-mont-black italic tracking-widest">
          Thank you
        </h1>
        <div className="flex flex-row mt-3.5">
          <img src="/img/github_icon.svg" alt="github" />
          <img className="ml-5" src="/img/linkedin_icon.svg" alt="linkedin" />
        </div>
      </div>
    </FooterLayout>
  );
};

Footer.propTypes = {};

export default Footer;
