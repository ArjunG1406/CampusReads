import Image from "next/image";
import Hero from "./hero";
import Navbar from "./navbar";
import Footer from "./Footer";
import Why from "./Why";
import Popular from "./popular";
import Recommend from "./Recommend";
const home = () => {
  return (
    <div><Navbar />
      <Hero />
      <Popular />
      <Recommend />
      <Why />
     <Footer/></div>
  )
}

export default home