import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { cinzel, cinzelDecorative } from "./fonts";

const Latest = () => {
  return (
    <section className=" pt-10 px-5">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>
        <span className={cinzelDecorative.className}>O</span>ur{" "}
        <span className={cinzelDecorative.className}>L</span>atest{" "}
        <span className={cinzelDecorative.className}>W</span>ork
      </h1>
      <div className=" mt-10">
        <Image src="/photoAlbum/A-2.jpg" alt="photo" width={500} height={500} />
      </div>
      <p className="text-sm mt-5">
        Introducing our latest masterpiece: a visual tale meticulously crafted
        by BlackEye Visuals. Dive into a world where creativity knows no bounds
        and authenticity reigns supreme
      </p>
      <div className=" mt-10">
        <Image src="/photoAlbum/A-3.jpg" alt="photo" width={500} height={500} />
      </div>
      <Link
        href="/contact"
        className="text-primary mt-10 text-2xl block w-full text-center"
      >
        See More <FaArrowRight className=" inline" />{" "}
      </Link>
    </section>
  );
};

export default Latest;
