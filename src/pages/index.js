import React, { useState } from "react";
import AboutSection from "../components/About";
import { homeObjThree } from "../components/About/Data";
import AboutSection1 from "../components/AboutSection1";
import Accordion from "../components/Acccordion/Accordion";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Levanio from "../components/Levanio";
import { homeObjLev } from "../components/Levanio/Data";
import MoreInfo from "../components/MoreInfo";
import { homeObjTwo } from "../components/MoreInfo/Data";
import Navbar from "../components/Navbar/";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import ProgressBar from "../components/ProgressBar";
// import PriceCards from "../components/PriceCards";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Section1 />
      <MoreInfo {...homeObjTwo} />
      <Section2 />
      <Levanio {...homeObjLev} />
      <Skills />
      <ProgressBar />
      <AboutSection {...homeObjThree} />
      <AboutSection1 />
{/*//       <PriceCards />*/}
      <Accordion />
      <Footer />
    </>
  );
};

export default Home;
