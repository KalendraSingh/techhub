import React from "react";

import { images } from "../../../constants";
import Search from "../../../components/Search";

const Hero = ({ setSearchKeyword }) => {

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-center items-center h-[90vh]">
      <div className=" lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Enhance your knowledge & find solutions at TechHub.
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
        Enhance your knowledge by exploring diverse topics and finding innovative solutions at TechHub, a hub for learning and problem-solving in technology.
        </p>
        <Search className="mt-10 lg:mt-6 xl:mt-10"  onSearchKeyword={handleSearch}/>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Technology
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-[500px]"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
