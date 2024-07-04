import { cinzel, cinzelDecorative } from "./fonts";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import Socials from "./Socials";
import TopNav from "./TopNav";

const Header = ({ screenWidth }: propType) => {
  const mobilePictures = [2,9,10,13,15,21,31,32,33,36,40,45,49,57,58,59,60,61,62,63,66,67,69,71,81,85,87,88,89,93,96];
  const desktopPictures = [5,6,9,12,14,15,16,18,19,21,31,33,35,38,39,42,43,45,46,50,57,58,59,60,61,62,63,63,66,67,69,71,81,85,87,88,89,93,96];
  const pictures = [];
  if (screenWidth < 768) {
    for (let i = 0; i < mobilePictures.length; i++) {
      pictures.push(`/photoAlbum/A-${mobilePictures[i]}.jpg`);
    }
  } else{
    for (let i = 0; i < desktopPictures.length; i++) {
      pictures.push(`/photoAlbum/A-${desktopPictures[i]}.jpg`);
    }
  }

  return (
    <section className="relative ">
      <TopNav />
      <Swiper
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        {pictures.map((picture, i) => (
          <SwiperSlide key={i}>
            <div className="  h-[100vh] after:bg-black after:block after:absolute after:h-full after:w-full after:opacity-40  ">
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
      <div className="bottom-28 md:bottom-16 left-4 absolute z-10 md:left-10">
        <h1
          className={` text-5xl md:text-7xl text-primary select-none   ${cinzel.className}`}
        >
          <span className={cinzelDecorative.className}>B</span>LACKEYE <br />{" "}
          <span className={cinzelDecorative.className}>V</span>ISUALS
        </h1>
        <p className=" w-[418px] mt-5 text-md font-thin hidden md:block">
          We offer a range of photographic experiences tailored to your unique
          needs. From stunning portraits and heartfelt weddings to dynamic
          events and striking commercial campaigns, our lens brings your story
          to life
        </p>
      </div>
      <Socials />
    </section>
  );
};

interface propType {
  screenWidth: number;
}

export default Header;
