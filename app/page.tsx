import Book from "./ui/Book";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Latest from "./ui/Latest";
import Portfolio from "./ui/Portfolio";
import Prices from "./ui/Prices";
import ScreenSize from "./ui/ScreenSize";

export default function Home() {
  return (
    <>
      <Book />
      <ScreenSize />
      <Portfolio />
      <Latest />
      <Prices />
      <Footer />
    </>
  );
}
