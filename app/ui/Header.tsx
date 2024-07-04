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
  const pictures = [];

  // if (screenWidth < 768) {
  //   pictures.push(
  //     "/photoAlbum/A-2.jpg",
  //     "/photoAlbum/A-9.jpg",
  //     "/photoAlbum/A-10.jpg",
  //     "/photoAlbum/A-12.jpg",

  //     "/photoAlbum/A-15.jpg",

  //     "/photoAlbum/A-16.jpg",
  //     "/photoAlbum/A-20.jpg",

  //     "/photoAlbum/A-31.jpg",
  //     "/photoAlbum/A-33.jpg",
  //     "/photoAlbum/A-40.jpg",


  //     "/photoAlbum/A-45.jpg",
  //     "/photoAlbum/A-47.jpg",
  //     "/photoAlbum/A-53.jpg",


  //     "/photoAlbum/A-57.jpg",
  //     "/photoAlbum/A-58.jpg",
  //     "/photoAlbum/A-59.jpg",


  //     "/photoAlbum/A-60.jpg",
  //     "/photoAlbum/A-64.jpg",
  //     "/photoAlbum/A-65.jpg",


  //     "/photoAlbum/A-66.jpg",
  //     "/photoAlbum/A-67.jpg",
  //     "/photoAlbum/A-68.jpg",


  //     "/photoAlbum/A-69.jpg",
  //     "/photoAlbum/A-70.jpg",
  //     "/photoAlbum/A-71.jpg",


  //     "/photoAlbum/A-72.jpg",
  //     "/photoAlbum/A-73.jpg",
  //     "/photoAlbum/A-75.jpg",


  //     "/photoAlbum/A-76.jpg",
  //     "/photoAlbum/A-77.jpg",
  //     "/photoAlbum/A-78.jpg",

  //     "/photoAlbum/A-79.jpg",
  //     "/photoAlbum/A-80.jpg",
  //     "/photoAlbum/A-81.jpg",


  //     "/photoAlbum/A-82.jpg",
  //     "/photoAlbum/A-83.jpg",
  //     "/photoAlbum/A-84.jpg",


  //     "/photoAlbum/A-85.jpg",
  //     "/photoAlbum/A-86.jpg",
  //     "/photoAlbum/A-87.jpg",


  //     "/photoAlbum/A-88.jpg",
  //     "/photoAlbum/A-89.jpg",
  //     "/photoAlbum/A-90.jpg",



  //     "/photoAlbum/A-91.jpg",
  //     "/photoAlbum/A-92.jpg",
  //     "/photoAlbum/A-93.jpg",


  //     "/photoAlbum/A-94.jpg",
  //     "/photoAlbum/A-95.jpg",
  //     "/photoAlbum/A-96.jpg",


  //     "/photoAlbum/A-97.jpg",
  //     "/photoAlbum/A-98.jpg",
  //     "/photoAlbum/A-99.jpg",


  //     "/photoAlbum/A-100.jpg",
  //     "/photoAlbum/A-101.jpg",
  //     "/photoAlbum/A-102.jpg",
  //   );
  // } else {
  //   pictures.push(
  //     "/photoAlbum/A-5.jpg",

  //     "/photoAlbum/A-14.jpg",
  //     "/photoAlbum/A-17.jpg",
  //     "/photoAlbum/A-18.jpg",


  //     "/photoAlbum/A-19.jpg",
  //     "/photoAlbum/A-21.jpg",
  //     "/photoAlbum/A-31(2).jpg",


  //     "/photoAlbum/A-35.jpg",
  //     "/photoAlbum/A-39.jpg",
  //     "/photoAlbum/A-10.jpg",

  //   );
  // }

  for (let i = 1; i < 102; i++) {
    pictures.push(`/photoAlbum/A-${i}.jpg`);
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
