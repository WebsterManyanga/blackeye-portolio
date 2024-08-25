import Image from "next/image";
import { cinzel, cinzelDecorative } from "../ui/fonts";
import { photoAlbum } from "../lib/photoAlbum";

const page = () => {

  const concepts = [

    [151,150,138,139],[123,124,128,129],[104,105,106,107],[1,2,2,1],[3,4,51,4],[5,6,7,19],[9,49,9,9],[10,11,12,48],[13,13,13,13],[14,17,18,18],[21,21,21,21],[22,22,24,24],[26,27,28,29],[15,16,20,31],[32,33,33,32],[34,34,34,34],[35,38,39,42], [36,37,40,41],[45,45,45,45], [46,46,46,46], [47,47,47,47],[56,56,56,56],[57,57,57,57],[58,58,58,58],[60,61,62,63],[66,67,68,69],[73,75,76,77],[78,79,78,79],[80,81,83,85],[82,86,88,90],[87,89,93,93],[95,96,102,100]
  ]
  const selection:number[] = [];
  for (let i = 0; i < concepts.length; i++) {
    for (let j = 0; j < 4; j++) {
      selection.push(concepts[i][j]);
    }
  }
  const pictures = selection.map((picture, i) => (
    <div className="relative w-1/2 md:w-1/4 mt-4  inline-block" key={i}>
    <Image className=" shadow-md w-full p-4" src={`/photoAlbum/A-${picture}.jpg`} alt="photo" width={4000} height={5000} />
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
      <div>
        {pictures}
      </div>
      
      {/* <div className="grid grid-cols-2 p-1">
        {pictures}
      </div> */}
    </section>
  );
};

export default page;
