"use client";

import Image from "next/image";
import { cinzel } from "./fonts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { photoAlbum } from "../lib/photoAlbum";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel();

  const selection = [
    59,58, 53,55,]
  const pictures = selection.map((picture, i) => (
    <SwiperSlide key={i}>
      <Image src={`/photoAlbum/A-${picture}.jpg`} alt="photo" width={4000} height={5000} />
  </SwiperSlide>
  ));


  return (
    <section className="pt-10 px-5" id="portfolio">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>Portfolio</h1>
      <div className=" md:grid grid-rows-1 grid-cols-2 " >
      <div className="mt-10 md:w-[80%] lg:w-[65%] justify-self-center">
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        {pictures}
       </Swiper>
      </div>
      <div>
      <p className="text-sm mt-5 md:mt-10 font-thin">
      &quot;Welcome to BlackEye Visuals, where creativity meets authenticity in
        every frame. We are passionate about capturing moments that tell your
        unique story through the lens of our creative vision. Explore our
        portfolio and let our images speak to the genuine emotions, vivid
        colors, and captivating compositions that define our work. Join us on a
        journey of visual storytelling, where every shot is a masterpiece of
        your own narrative&quot;
      </p>
      <div className=" mt-10 relative md:w-[80%] lg:w-[60%]">
        <Image src={photoAlbum[47].image} alt="photo" width={4000} height={5000} />
      </div>
      </div>
      </div>
      <Link
        href="/photoAlbum"
        className="text-primary mt-10 text-2xl block w-full text-center"
      >
        See More <FaArrowRight className="inline" />{" "}
      </Link>
    </section>
  );
};

export default Portfolio;
