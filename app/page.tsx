import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Latest from "./ui/Latest";
import Portfolio from "./ui/Portfolio";
import Prices from "./ui/Prices";

export default function Home() {
  return (
    <main>
      <Header />
      <Portfolio />
      <Latest />
      <Prices />
      <Footer />
    </main>
  );
}
