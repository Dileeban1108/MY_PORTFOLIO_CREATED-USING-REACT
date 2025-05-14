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
          <h2 style={{color:"#149ddd",textTransform:"uppercase", fontSize:"25px" }}>Who Am I</h2>
          <p>
          My academic background and hands-on experience as a Trainee Software Engineer have equipped me with a solid foundation in programming, software design, and system analysis. I specialize in full-stack development using Java, JavaScript, Spring Boot, React, and Angular. In my trainee role, I contributed to developing and improving web applications in agile teams, gaining practical industry experience. With a strong understanding of cybersecurity principles, I build secure, reliable applications and focus on delivering clean, maintainable code and seamless user experiences.          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="./assets/myimage.jpg" className="img-fluid" alt="" />
          </div>
          <div className="content">
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
