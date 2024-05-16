import React from "react";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import "boxicons/css/boxicons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
const handleNavBar = () => {
  const navBar = document.getElementById("header");
  const menuIcon = document.getElementById("menuIconIcon");

  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x");
    navBar.style.left = "0px";
  } else {
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
    navBar.style.left = "-330px";
  } 

};

const Main = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1199) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <header id="header" if>
        <div className="profile">
          <div className="img"></div>

          <h1 className="text-light">
            <a href="index.html">Sekara Dileeban</a>
          </h1>
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>

            <li>
              <a href="#project" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Projects</span>
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="menu-icon" id="menuIcon" onClick={handleNavBar}>
          <i class="bx bx-menu" id="menuIconIcon"></i>
        </div>
      </header>
      <div id="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Project />
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
