import React from "react";
// import images
import WomanImg from "../img/woman_hero.png";
// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[525px] bg-hero bg-no-repeat bg-cover bg-center pt-24 pb-1">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMEN</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block overflow-y-hidden">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
