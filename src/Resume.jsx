import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "#149ddd", textTransform: "uppercase", fontSize:"25px" }} >Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title" style={{color:"#149ddd",textTransform:"uppercase" ,fontSize:"20px"}}>Education</h3>
            <div className="resume-item">
              <h4>B.Sc(Hon's) in Software Engineering</h4>
              <h5>2022 - 2026</h5>
              <p>Current GPA : 3.75</p>
              <p>
                <em>University Of Kelaniya-Sri Lanka</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>G.C.E Advanced Level</h4>
              <h5>2018 - 2020</h5>
              <p>Z-Score : 1.5348</p>
              <p>
                <em>Rajasinghe Central College-Ruvanwella</em>
              </p>
            </div>
          </div>
          <br />
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title" style={{color:"#149ddd",textTransform:"uppercase" ,fontSize:"20px" }}>Professional Experiences</h3>
            <div className="resume-item">
              <h4>Trainee software enginner - ISA (Pvt) Ltd</h4>
              <h5>Oct 2024- April 2025</h5>
              <p>
                <em>ISA (Pvt) Ltd</em>
              </p>
              <p>
                Isa is a leading software company in Srilanka which providing the IT support for airarbia aviation.
              </p>
            </div>
            <div className="resume-item">
              <h4>Freelancer - Fiverr</h4>
              <h5>Jan 2021 - Present</h5>
              <p>
                <em>Fiverr</em>
              </p>
              <p>
                I am doing freelancing on fiverr platform which helped me to gained much experience.
              </p>
            </div>
          </div>
          <br />
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title"style={{color:"#149ddd",textTransform:"uppercase" ,fontSize:"20px" }} >Volunteering Experiences</h3>
            <div className="resume-item">
              <h4>Active Member-Designing Team</h4>
              <h5>Sep 2022- Jan 2023</h5>
              <p>
                <em>RealHack-4.0</em>
              </p>
              <p>
                RealHack is the biggest interuniversity hackathon organized by
                the Software Engineering Student Association at the University
                of Kelaniya.
              </p>
            </div>
            <div className="resume-item">
              <h4>Active Member-Organizing Committee</h4>
              <h5>Jan 2023 - Present</h5>
              <p>
                <em>Rotaract Club</em>
              </p>
              <p>
                The Rotaract Club of the University of Kelaniya is an
                outstanding platform to master the skills of leadership and
                conquer the opportunity of serving the community
              </p>
            </div>
            <div className="resume-item">
              <h4>Active Member - Designing Team</h4>
              <h5>May 2023 - Dec 2023</h5>
              <p>
                <em>Game Of Codes</em>
              </p>
              <p>
                'Game of Codes' is a program idea initiated by the IEEE WIE
                Affinity Group of the University of Kelaniya in 2021 as an
                interuniversity game development competition
              </p>
            </div>
          </div>
          <br />

          <br />
          <h3 className="resume-title" style={{color:"#149ddd",textTransform:"uppercase" ,fontSize:"20px"}}>Summary</h3>
          <div className="resume-item pb-0">
            <h4 >Soft Skills</h4>
            <ul>
              <li>Effective communication</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
              <li>Colloborative Working</li>
              <li>Leadership</li>
            </ul>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Resume;
