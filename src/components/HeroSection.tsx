import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className=" flex">
      <div>
        <h1 className="text-7xl mt-32 leading-[5rem] font-semibold">
          Rich collection of <br /> old money asthetics
        </h1>
        <p className="w-[34ch] font-medium mt-10">
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not.
        </p>
        <button className="p-5 flex  items-center gap-2 mt-32 font-medium px-5 bg-orange-100">
          Explore Collections
          <RiArrowRightLine className="text-" />
        </button>
      </div>
      <div className="flex absolute -z-10 right-0">
        <div className="h-[85vh] relative w-[120vh] flex-1 bg-orange-100">
          <h1 className="absolute text-4xl font-semibold bottom-10 left-10">Mens</h1>
        </div>
        <div className="h-[85vh] relative flex-1 bg-orange-200">
          <h1 className="absolute text-4xl font-semibold bottom-10 left-10">Womens</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
