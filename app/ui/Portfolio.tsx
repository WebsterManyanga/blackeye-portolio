"use client";

import Image from "next/image";
import { cinzel } from "./fonts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { photoAlbum } from "../lib/photoAlbum";

const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel();

  const selection = [
    photoAlbum[56],
    photoAlbum[35],
    photoAlbum[32],
    photoAlbum[13],
    photoAlbum[9],
    photoAlbum[48],
  ];
  const pictures = selection.map((picture, i) => (
    <div className="embla__slide" key={i}>
      <Image src={picture.image} alt="photo" width={4000} height={5000} />
    </div>
  ));

  return (
    <section className="pt-10 px-5" id="portfolio">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>Portfolio</h1>
      <div className=" md:grid grid-rows-1 grid-cols-2 " >
      <div className="embla mt-10 md:w-[80%] lg:w-[65%] justify-self-center" ref={emblaRef}>
        <div className="embla__container">{pictures} </div>
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
