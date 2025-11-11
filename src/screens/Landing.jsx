import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import HeroSection from "../components/HeroSection";
import Voices from "../components/Sections/Voices";
import About from "../components/Sections/About";
import Newsletter from "../components/Sections/newsletter";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <About />
      <Voices />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}


