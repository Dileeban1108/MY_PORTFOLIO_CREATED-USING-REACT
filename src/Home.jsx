import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typedStrings = typedElement.getAttribute('data-typed-items').split(',');
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500, // Optional: Delay before typing starts
        showCursor: true, // Optional: Show cursor while typing
        cursorChar: '_',
      });
    }

    const handleScroll = () => {
      const backToTopButton = document.querySelector('.back-to-top');
      if (window.scrollY > 100) { // Adjust this value as needed
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-container">
        <h1>Sekara Dileeban</h1>
        <p>
          I'm a{" "}
          <span
            className="typed"
            data-typed-items="Full Stack Web Developer,Cybersecurity Enthusiast,Php Developer"
          ></span>
        </p>
       

      </div>
        <a href="/Dileeban_CV.pdf" download="Dileeban_CV.pdf" className="cv">
          Download My CV
        </a>  
      <a href="#" className="back-to-top">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </section>
  );
};

export default Home;
