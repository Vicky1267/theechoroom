import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // ✅ icon library (install with: npm i lucide-react)
import logo from "../../assets/img/logo.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Wrapper style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          {/* Logo */}
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={logo} alt="Echo Room Logo" style={{ height: "45px" }} />
            <h1
              style={{ marginLeft: "15px", color: "white" }}
              className="font20 extraBold"
            >
              Echo Room
            </h1>
          </Link>

          {/* Desktop Menu */}
          <UlWrapper className="flexNullCenter">
            <li>
              <Link to="home" smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-80}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="voices" smooth={true} offset={-80}>
                Voices
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>

          {/* Get Started Button */}
          <UlWrapperRight>
            <li>
              <a
                href="https://chat.whatsapp.com/HYiKqX0ensx2T54dR8vHkb?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="lightBg"
              >
                Get Started
              </a>
            </li>
          </UlWrapperRight>

          {/* Hamburger Menu Button */}
          <BurgerWrapper onClick={toggleMenu}>
            {menuOpen ? <X color="white" size={26} /> : <Menu color="white" size={26} />}
          </BurgerWrapper>
        </NavInner>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <MobileMenu>
            <li>
              <Link to="home" smooth={true} offset={-80} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-80} onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="voices" smooth={true} offset={-80} onClick={toggleMenu}>
                Voices
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-80} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/HYiKqX0ensx2T54dR8vHkb?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="lightBg"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </li>
          </MobileMenu>
        )}
      </Wrapper>
    </>
  );
}

// 🌐 STYLES
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #0a1a2f;
  color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, height 0.3s ease;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const BurgerWrapper = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  height: 100%;
  display: none;
  cursor: pointer;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  li a {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 15px;
    transition: color 0.3s ease;
  }
  li a:hover {
    color: #00bcd4;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  list-style: none;
  li a.lightBg {
    background-color: #00bcd4;
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

const MobileMenu = styled.ul`
  list-style: none;
  background-color: #0a1a2f;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  li a:hover {
    color: #00bcd4;
  }
  .lightBg {
    background-color: #00bcd4;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
  }
`;
