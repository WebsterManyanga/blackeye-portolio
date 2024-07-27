"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { cinzel, cinzelDecorative } from "./fonts";
import useEmblaCarousel from "embla-carousel-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Latest = () => {
  const [emblaRef] = useEmblaCarousel();

  const selection = [
    104,66,77,57]
  const pictures = selection.map((picture, i) => (
    <SwiperSlide key={i}>
      <Image src={`/photoAlbum/A-${picture}.jpg`} alt="photo" width={4000} height={5000} />
  </SwiperSlide>
  ));

  return (
    <section className=" pt-10 px-5">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>
        <span className={cinzelDecorative.className}>O</span>ur{" "}
        <span className={cinzelDecorative.className}>L</span>atest{" "}
        <span className={cinzelDecorative.className}>W</span>ork
      </h1>
      <div className="md:grid grid-rows-1 grid-cols-2 ">
      <div className="mt-10 md:w-[80%] justify-self-center lg:w-[65%]">
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          {pictures}
        </Swiper>
      </div>
      <div>
      <p className="text-sm mt-5 md:mt-10 font-thin">
        Introducing our latest masterpiece: a visual tale meticulously crafted
        by BlackEye Visuals. Dive into a world where creativity knows no bounds
        and authenticity reigns supreme
      </p>
      <div className=" mt-10 relative md:w-[80%] lg:w-[60%] snap-start md:snap-align-none">
        <Image src={'/photoAlbum/A-58.jpg'} alt="photo" width={4000} height={5000} />
      </div>

      </div>
      </div>
      <Link
        href="/photoAlbum"
        className="text-primary mt-10 text-2xl block w-full text-center"
      >
        See More <FaArrowRight className=" inline" />{" "}
      </Link>
    </section>
  );
};

export default Latest;
