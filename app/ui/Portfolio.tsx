'use client';

import Image from "next/image";
import { cinzel } from "./fonts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { photoAlbum } from "../lib/photoAlbum";

const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel();

  const pictures = photoAlbum.map((picture) => (
    <div className=" embla__slide">
      <Image src={picture} alt="photo" width={500} height={500} />
    </div>
  ));

  return (
    <section className="pt-10 px-5">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>Portfolio</h1>
      <div className="embla mt-10" ref={emblaRef}>
        <div className="embla__container">{pictures} </div>
      </div>
      <p className="text-sm mt-5">
        "Welcome to BlackEye Visuals, where creativity meets authenticity in
        every frame. We are passionate about capturing moments that tell your
        unique story through the lens of our creative vision. Explore our
        portfolio and let our images speak to the genuine emotions, vivid
        colors, and captivating compositions that define our work. Join us on a
        journey of visual storytelling, where every shot is a masterpiece of
        your own narrative"
      </p>
      <div className=" mt-10">
        <Image src="/photoAlbum/A-3.jpg" alt="photo" width={500} height={500} />
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

export default Portfolio;
