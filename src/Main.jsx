import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Certificates from "./Certificates";
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
            <a href="">Sekara Dileeban</a>
          </h1>
          <div className="social-links">
            
            <a href="https://github.com/Dileeban1108" className="facebook">
              <i className="bx bxl-github"></i>
            </a>
          
            <a href="https://www.linkedin.com/in/dileebanli2001" className="linkedin">
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
              <a href="#certificate" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Certificates</span>
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
        <Certificates/>
        <Project />
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
