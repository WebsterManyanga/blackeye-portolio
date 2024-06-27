import Image from "next/image";
import { cinzel, cinzelDecorative } from "../ui/fonts";
import { photoAlbum } from "../lib/photoAlbum";

const page = () => {
  const pictures = photoAlbum.map((picture, index) => (
    <div className="relative" key={index}>
      <Image className=" shadow-md rounded-md" src={picture.image} alt="photo" width={500} height={500} />
    </div>
  ));

  return (
    <section className=" bg-white w-screen h-full">
      <header className="bg-black">
        <h1 className={`text-4xl p-5 z-10 text-primary  ${cinzel.className}`}>
          <span className={cinzelDecorative.className}>B</span>LACKEYE <br />{" "}
          <span className={cinzelDecorative.className}>V</span>ISUALS
        </h1>
      </header>
      <div className="grid grid-cols-2  gap-2 p-1">
        {pictures}
      </div>
    </section>
  );
};

export default page;
