import Link from "next/link";
import { cinzel } from "./fonts";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";

const Prices = () => {
  return (
    <section className="py-10 px-5">
      <h1 className={`${cinzel.className} text-5xl text-primary`}>PRICES</h1>
      <div className="embla mt-10">
        <Image src="/photoAlbum/A.jpg" alt="photo" width={500} height={500} />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <div className="flex justify-between text-2xl mb-3">
            <h2 className=" border-b-4 border-b-primary pr-3">Portrait</h2>
            <p>$250</p>
          </div>
          <p>
            This includes individual, family, and group portraits, as well as
            headshots for business and corporate purposes.
          </p>
        </div>
        <div>
          <div className="flex justify-between text-2xl mb-3">
            <h2 className=" border-b-4 border-b-primary pr-3">Events</h2>
            <p>$500</p>
          </div>
          <p>
            This includes weddings, birthdays, anniversaries, and other
            celebrations.
          </p>
        </div>
        <div>
          <div className="flex justify-between text-2xl mb-3">
            <h2 className=" border-b-4 border-b-primary pr-3">Commercial</h2>
            <p>$800</p>
          </div>
          <p>
            This includes product photography, real estate photography, and
            corporate events.
          </p>
        </div>
      </div>
      <div className=" mt-10"></div>
      <Link
        href="/contact"
        className={` ${cinzel.className} text-primary mt-10 text-2xl block w-full text-center `}
      >
        Book Now <FaCameraRetro className="ml-2 inline-block" />
      </Link>
    </section>
  );
};

export default Prices;
