"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import arrow from "../../../public/assets/arrow.svg";
import carHero from "../../../public/assets/hero-car.png";

const Hero = ({
  bg,
  minHeight = 400,
  shadow = "rgba(0, 0, 0, 0.6)",
  title,
  description,
  image,
  width,
  classes,
  setSearchTerm,
  searchTerm,
}) => {
  return (
    <div
      className="relative w-full bg-center bg-cover mb-[100px]  md:mb-[155px] rounded-lg overflow-hidden flex"
      style={{
        backgroundImage: `url(${bg.src})`,
        minHeight,
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background: shadow,
        }}
      />
      <div
        className={`${width} relative z-20 flex flex-col lg:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 py-6 gap-6  mx-auto`}
      >
        <div className="text-center lg:text-right flex flex-col gap-[16px] max-w-full lg:max-w-[45%]">
          <h1 className="classes text-white  font-bold text-[20px] sm:text-[26px] md:text-[32px] lg:text-[50px] leading-[.3]">
            {title}
          </h1>
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed w-full m-0">
            {description}
          </p>
        </div>
        {image && (
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
            <div className="flex items-end justify-center gap-2 w-full">
              <Image
                src={arrow}
                width={80}
                height={40}
                alt="arrow"
                className="hidden sm:block"
              />
              <Image
                src={carHero}
                width={240}
                height={160}
                alt="hero car"
                className="h-auto object-contain mx-auto hidden md:block"
              />
            </div>
            <div className="relative w-full max-w-sm">
              <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-[#B7B7B7] text-lg" />
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                type="text"
                placeholder="بحث"
                className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] py-[10px] pr-[40px] pl-[14px] bg-white shadow-md text-sm"
              />
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <div className="rounded-[8px] bg-[#DD3B4A] px-3 py-2">
                <p className="text-white text-sm font-normal">سيارات هجينة</p>
              </div>
              <div className="rounded-[8px] border border-[#D0D5DD] px-3 py-2">
                <p className="text-white text-sm font-normal">
                  سيارات دفع رباعي
                </p>
              </div>
              <div className="rounded-[8px] border border-[#D0D5DD] px-3 py-2">
                <p className="text-white text-sm font-normal">
                  سيارات كهربائية
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
