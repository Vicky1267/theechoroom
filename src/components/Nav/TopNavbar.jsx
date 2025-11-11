import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Assets
import logo from "../../assets/img/logo.png";


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Wrapper className="flexCenter animate" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
      <img src={logo} alt="Echo Room Logo" style={{ height: "45px" }} />
   
            <h1 style={{ marginLeft: "15px", color: "white"}} className="font20 extraBold">
              Echo Room
            </h1>
          </Link>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="about" spy={true} smooth={true} offset={-80}>
                About Us
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="voices" spy={true} smooth={true} offset={-80}>
                Voices
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <a href="https://chat.whatsapp.com/HYiKqX0ensx2T54dR8vHkb?mode=wwt" target="_blank" 
          rel="noopener noreferrer" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #0a1a2f; /* 🎨 Navbar background */
  color: #ffffff;            /* 🎨 Text color */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease, height 0.3s ease;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
display: flex;
  list-style: none;

  li a {
    color: #ffffff; /* 🎨 Nav link text color */
    text-decoration: none;
    padding: 10px 15px;
    transition: color 0.3s ease;
  }

  li a:hover {
    color: #00bcd4; /* 🎨 Hover color */
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
     display: flex;
  list-style: none;

  li a {
    color: #ffffff;
    text-decoration: none;
  }

  li a.lightBg {
    background-color: #00bcd4; /* 🎨 Button background */
    color: #fff;
    border-radius: 8px;
    padding: 10px 15px;
  }

  li a.lightBg:hover {
    background-color: #019bb5;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;



