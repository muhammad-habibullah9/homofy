import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "../Navbar/Navbar";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:h-dvh h-72 min-h-full absolute bg-[url(https://i.ibb.co/zfk1xs8/01.jpg)] bg-center">
            <div className="relative md:h-dvh h-72 w-dvw bg-slate-500 bg-opacity-50 p-10">
              <div className="md:mt-32 md:space-y-5 animate__animated animate__lightSpeedInLeft animate__slow">
                <h1 className="md:text-5xl text-2xl text-white font-extrabold">
                  __ OFFERING DIVERSE
                </h1>
                <h3 className="md:text-5xl text-lg text-white font-bold">
                  PROPERTIES
                </h3>
                <p className="md:text-xl text-base text-white md:w-2/4">
                  Homofy provides you with lots of great properties throughout
                  the USA so that you could easily choose your dream property
                </p>
              </div>
              <div className=" animate__animated animate__fadeInDown animate__delay-1s">
                <button className="btn border-none bg-sky-500 text-white md:text-base mt-5">
                  VIEW PROPERTIES
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-dvh h-72 absolute bg-[url(https://i.ibb.co/Zz7CcXT/02.jpg)] bg-center">
            <div className="relative md:h-dvh h-72 w-dvw bg-slate-500 bg-opacity-30 p-10">
              <div className="md:mt-32 md:space-y-5 animate__animated animate__lightSpeedInLeft animate__slow">
                <h1 className="md:text-5xl text-2xl text-white font-extrabold">
                  ___ EASILY
                </h1>
                <h3 className="md:text-5xl text-lg text-white font-bold">
                  RENT & SALE
                </h3>
                <p className="md:text-xl text-base text-white md:w-2/4">
                  With the help our serices and property management solutions,
                  you can rent or sell any house or apartment.
                </p>
              </div>
              <div className=" animate__animated animate__fadeInDown animate__delay-1s">
                <button className="btn border-none bg-sky-500 text-white md:text-base mt-5">
                  VIEW PROPERTIES
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-dvh h-72 relative bg-[url(https://i.ibb.co/jzfr5Mk/03.jpg)] bg-center">
            <div className="absolute md:h-dvh h-72 w-dvw bg-slate-500 bg-opacity-30 p-10">
              <div className="md:mt-32 md:space-y-5 animate__animated animate__lightSpeedInLeft animate__slow">
                <h1 className="md:text-5xl text-2xl text-white font-extrabold">
                  ___ MORE THAN 20 YEARS OF
                </h1>
                <h3 className="md:text-5xl text-lg text-white font-bold">
                  EXPERIENCE
                </h3>
                <p className="md:text-xl text-base text-white md:w-2/4">
                  Founded in 1989, Our company in a team of renowned property
                  management andreal estate experts always ready to help you.
                </p>
              </div>
              <div className=" animate__animated animate__fadeInDown animate__delay-1s">
                <button className="btn border-none bg-sky-500 text-white md:text-base mt-5">
                  VIEW PROPERTIES
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
