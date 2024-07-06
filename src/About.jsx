import React from "react";
const About = () => {
  const languages = [
    { name: "Sinhala", proficiency: 100 },
    { name: "Tamil", proficiency: 100 },
    { name: "English", proficiency: 90 },
  ];
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>
            My academic journey has equipped me with a deep understanding of
            programming languages, software design, and system analysis,
            enabling me to build and manage complex software solutions
            efficiently. Throughout my coursework and personal projects, I have
            honed my skills in full stack development, particularly with the
            MERN stack (MongoDB, Express.js, React, Node.js). Additionally, I
            have developed a solid foundation in cybersecurity, which allows me
            to ensure the security and integrity of the applications I create. I
            am passionate about creating seamless user experiences and writing
            clean, maintainable code
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="./assets/myimage.jpg" className="img-fluid" alt="" />
          </div>
          <div className="content">
            <h3>Bio Data</h3>
            <p className="des">
             
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>08 November 2001</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+94 76 756 6677</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Yatiyanthota,Kegalle</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>23</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>B.Sc(Hon's) in Software Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email::</strong>{" "}
                    <span>sekara.dileeban@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Languages:</strong>
                  </li>
                  {languages.map((language, index) => (
                    <div key={index} className="mb-3">
                      <strong>{language.name}:</strong>
                      <div className="custom-progress">
                        <div
                          className="custom-progress-bar"
                          style={{ width: `${language.proficiency}%` }}
                        >
                          {language.proficiency}%
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
