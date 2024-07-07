import Link from "next/link";
import { cinzel } from "./fonts";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";

const Prices = () => {
  let insta = 'https://ig.me/m/blackeye_visuals_';

  return (
    <section className="py-10 px-5" id="price">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>PRICES</h1>
      <div className="md:flex gap-4 ">
      <div className="embla mt-10 relative">
        <Image src="/photoAlbum/A-2.jpg" alt="photo" width={4000} height={5000} />
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <div>
          <div className="flex justify-between text-2xl mb-3">
            <h2 className=" border-b-4 border-b-primary pr-3">Portrait</h2>
            <p>300zł</p>
          </div>
          <p>
            This includes individual, family, and group portraits, as well as
            headshots for business and corporate purposes.
          </p>
        </div>
        <div>
          <div className="flex justify-between text-2xl mb-3">
            <h2 className=" border-b-4 border-b-primary pr-3">Events</h2>
            <p>500zł</p>
          </div>
          <p>
            This includes weddings, birthdays, anniversaries, and other
            celebrations.
          </p>
        </div>
        <div>
          <div className="flex justify-between text-2xl mb-3">
            <h2 className=" border-b-4 border-b-primary pr-3">Commercial</h2>
            <p>800zł</p>
          </div>
          <p>
            This includes product photography, real estate photography, and
            corporate events.
          </p>
        </div>
      </div>
      <div className=" mt-10"></div>
      </div>
      <div className="w-full">
        <a
          href={insta}
          className={` ${cinzel.className} text-primary mx-auto mt-10 text-2xl block w-fit py-2 px-5 text-center border border-primary rounded-md`}
        >
          Book Now <FaCameraRetro className="ml-2 inline-block" />
        </a>
      </div>
    </section>
  );
};

export default Prices;
