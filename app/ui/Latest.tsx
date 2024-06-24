"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { cinzel, cinzelDecorative } from "./fonts";
import useEmblaCarousel from "embla-carousel-react";
import { photoAlbum } from "../lib/photoAlbum";

const Latest = () => {
  const [emblaRef] = useEmblaCarousel();

  // const pictures = photoAlbum.map((picture) => (
  //   <div className=" embla__slide">
  //     <Image src={picture} alt="photo" width={500} height={500} />
  //   </div>
  // ));

  const selection = [photoAlbum[56], photoAlbum[55], photoAlbum[57]];
  const pictures = selection.map((picture, i) => (
    <div className="embla__slide" key={i}>
      <Image src={picture.image} alt="photo" width={500} height={500} />
    </div>
  ));

  return (
    <section className=" pt-10 px-5">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>
        <span className={cinzelDecorative.className}>O</span>ur{" "}
        <span className={cinzelDecorative.className}>L</span>atest{" "}
        <span className={cinzelDecorative.className}>W</span>ork
      </h1>
      <div className="embla mt-10" ref={emblaRef}>
        <div className="embla__container">{pictures} </div>
      </div>
      <p className="text-sm mt-5">
        Introducing our latest masterpiece: a visual tale meticulously crafted
        by BlackEye Visuals. Dive into a world where creativity knows no bounds
        and authenticity reigns supreme
      </p>
      <div className=" mt-10 relative">
        <Image src={photoAlbum[33].image} alt="photo" width={500} height={500} />
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
