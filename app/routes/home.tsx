import React,{useRef} from "react";
import Navbar  from "../components/navbar";
import Hero from "../components/hero"
import LogoSlider from "../components/frameSlider";
import Steps from "../components/steps"
import WeDo from "../components/whatWeDo";
import Stats from "../components/stats"
import CardsGrid from "../components/cards"
import Alumini from "../components/alumini"
import Cta from "../components/cta"
import Footer from "../components/footer";
import SocialLinks from "../components/socials";

const Home = ()=>{
      return(
        <div>
          <Hero/>
          <Navbar/>
          <LogoSlider/>
          <Steps/>
          <WeDo/>
          <Stats/>
          <CardsGrid/>
          <Alumini/>
          <SocialLinks/>
          <Cta/>
          <Footer/>
        </div>
      )
}

export default Home;