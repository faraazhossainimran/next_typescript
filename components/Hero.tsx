"use client"
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 pt-36 padding-x">
            <div>
            <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 py-2 px-4"
          handleClick = {()=> {handleScroll}}
        />
            </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="Hero" className="object-container" fill />
            </div>
            <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
