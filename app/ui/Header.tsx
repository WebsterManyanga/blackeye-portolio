"use client";

import { cinzel, cinzelDecorative } from "./fonts";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  const pictures = ["/photoAlbum/A-31.jpg"];

  for (let i = 2; i < 59; i++) {
    pictures.push(`/photoAlbum/A-${i}.jpg`);
  }
  return (
    <section className="relative">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {pictures.map((picture, i) => (
          <SwiperSlide key={i}>
            <div className=" w-screen h-[100vh] after:bg-black after:block after:absolute after:h-full after:w-full after:opacity-40  ">
              <Image
                src={picture}
                alt="photo"
                objectFit="cover"
                layout="fill"
                objectPosition=""
                className=""
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h1
        className={`absolute bottom-16 left-4 text-5xl z-10 text-primary select-none   ${cinzel.className}`}
      >
        <span className={cinzelDecorative.className}>B</span>LACKEYE <br/> <span className={cinzelDecorative.className}>V</span>ISUALS
      </h1>
      <Socials />
    </section>
  );
};

export default Header;
