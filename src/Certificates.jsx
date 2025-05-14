import React from "react";
import cer_1 from "./assets/cer_1.png";
import cer_2 from "./assets/cer_2.png";
const Certificates = () => {
  const certificates = [
    {
      img: cer_1,
      title: "Carrier Essentials in Cybersecurity by Microsoft and LinkedIn",
      src: "https://www.linkedin.com/posts/dileebanli2001_certificate-of-completion-activity-7214511720986288128-0OXi?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: cer_2,
      title: "What is Generative AI",
      src: "https://www.linkedin.com/posts/dileebanli2001_certificate-of-completion-activity-7214137873715879938-npBP?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <section id="certificate" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2 style={{color:"#149ddd",textTransform:"uppercase", fontSize:"25px"}}>Certificates</h2>
          <p>
            I have successfully earned certifications in Cybersecurity and
            Artificial Intelligence, reflecting my commitment to staying at the
            forefront of technological advancements.
          </p>
        </div>

        <div className="project-main-container">
          <div className="project-list">
            {certificates.map((certificate, index) => (
              <div key={index} className="project-item">
                <img src={certificate.img} alt={certificate.img} />
                <div className="hover-text">
                  <a
                    href={certificate.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
