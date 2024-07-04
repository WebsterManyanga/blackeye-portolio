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
  const mobilePictures = [31,21,45,57,58,62];
  const desktopPictures = [31,21,45,46,58,62];
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
            <div className="h-[100vh] after:bg-black after:block after:absolute after:h-full after:w-full after:opacity-40  ">
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
