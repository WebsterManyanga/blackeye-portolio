"use client";

import Image from "next/image";
import { cinzel } from "./fonts";
import Link from "next/link";
import { FaArrowRight, FaCameraRetro } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { photoAlbum } from "../lib/photoAlbum";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdOutlinePhoto } from "react-icons/md";

const Portfolio = () => {

  const selection = [
    59, 41,15,49]
  const pictures = selection.map((picture, i) => (
    <SwiperSlide key={i}>
      <Image src={`/photoAlbum/A-${picture}.jpg`} alt="photo" width={4000} height={5000} />
  </SwiperSlide>
  ));


  return (
    <section className="pt-10 px-5 " id="portfolio">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>Portfolio</h1>
      <div className=" md:grid grid-rows-1 grid-cols-2 " >
      <div className="mt-10 md:w-[80%] lg:w-[65%] justify-self-center">
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {pictures}
       </Swiper>
      </div>
      <div>
      <div className={` ${cinzel.className}  w-full md:left-10`}>
        <a
          className="mx-auto mt-10 text-primary text-2xl block w-fit py-2 px-5 text-center border border-primary rounded-md"
        >
          Our Photo Album<MdOutlinePhoto  className="ml-2 inline-block" />
        </a>
      </div>

      <div className=" mt-10 relative md:w-[80%] lg:w-[60%] snap-start md:snap-align-none">

        <Image src={photoAlbum[47].image} alt="photo" width={4000} height={5000} />
        
      </div>
      </div>
      </div>
      <div className={` ${cinzel.className}  w-full z-10 md:left-10`}>
        <a
          className="mx-auto mt-10 text-primary text-2xl block w-fit py-2 px-5 text-center border border-primary rounded-md"
        >
          Book A Photoshoot <FaCameraRetro className="ml-2 inline-block" />
        </a>
      </div>

    </section>
  );
};

export default Portfolio;
