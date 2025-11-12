
import { useEffect } from "react";
import echoBg from "../assets/videos/echo-bg.mp4";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {
 
  return (
    <section id="home" className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        src={echoBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <h1 className="hero-title">Your Voice Matters. Let It Echo.</h1>
        <div className="hero-buttons">
          <a href="https://chat.whatsapp.com/HYiKqX0ensx2T54dR8vHkb?mode=wwt" target="_blank" 
          rel="noopener noreferrer" className="btn btn-primary">Join the Movement</a>

          <Link activeClass="active" style={{ padding: "10px 15px" }} to="share" spy={true} smooth={true} offset={-80}
          className="btn btn-outline">
          Share Your Voice
           </Link>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
