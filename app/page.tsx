import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Popular from "./components/popular";
import Recommend from "./components/Recommend";
export default function Home() {
  return (
    <div>
    <main>
    <div>
       <Navbar />
      <Hero />
      <Popular />
      <Recommend />
      <Why />
     <Footer/>
    </div>
      </main>
    </div>
  );
}
