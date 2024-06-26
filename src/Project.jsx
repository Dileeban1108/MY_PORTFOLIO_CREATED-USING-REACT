import React, { useState, useEffect } from "react";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    "All",
    "MERN Stack Projects",
    "React projects",
    "Cybersecurity projects",
    "Php Projects",
  ];

  const projects = [
    { title: "School Management System", category: "MERN Stack Projects", src:"https://github.com/Dileeban1108/SCHOOL_MANAGEMENT_SYSTEM_USING-MERN_STACK.git"},
    { title: "University Management System", category: "MERN Stack Projects", src:"https://github.com/Dileeban1108/UNIVERSITY_SHEDULE_FULLSTACK_WEBAPPLICATION_USING_MERN_STACK.git"},
    { title: "Medical Application", category: "MERN Stack Projects" ,src:"https://github.com/Dileeban1108/MEDICARE_APP_FULLSTACK_WEB_APPLICATION_USING_MERN_STACK.git"},
    { title: "Expense Tracker", category: "React projects" ,src:"https://github.com/Dileeban1108/EXPENSE-TRACKER-created-using-REACT.git"},
    { title: "Key Logger", category: "Cybersecurity projects" ,src:"https://github.com/Dileeban1108/KEYLOGGER_CTBERSECURITY_PYTHON_PROJECT.git"},
    { title: "File Encryptor & Decryptor", category: "Cybersecurity projects" ,src:"https://github.com/Dileeban1108/FILE-ENCRYPTER-AND-DECRYPTER-CYBERSECURITY-PYTHON-PROJECT.git"},
    { title: "File Intergrity Checker", category: "Cybersecurity projects" ,src:"https://github.com/Dileeban1108/FILE_INTERGRITY_CHECK_CYBERSECURITY_PROJECT_USING_PYTHON.git"},
    { title: "Firewall Bacics", category: "Cybersecurity projects" ,src:"https://github.com/Dileeban1108/HOW_FIREWALL_WORKS_CYBERSECURITY_MINI_PROJECT_USING_PYTHON.git"},
    { title: "Book Shop", category: "Php Projects" ,src:"https://github.com/Dileeban1108/BOOK-SHOP-FULL-STACK-WEBSITE-created-using-HTML-CSS-AND-JAVASCRIPT_Individual_Project_.git"},
    { title: "Motar Spare Parts", category: "Php Projects",src:"https://github.com/Dileeban1108/MOTOR-SPARE-PARTS-FULL-STACK-WEBSITE-created-using-HTML-CSS-and-JAVASCRIPT_Individual_Project.git" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      } else if (event.key === "ArrowLeft") {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [categories.length]);

  useEffect(() => {
    setSelectedCategory(categories[currentIndex]);
  }, [currentIndex]);

  return (
    <section id="project" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            I have successfully completed a variety of projects, including
            dynamic web applications using PHP, full-stack development projects
            utilizing the MERN stack, and cybersecurity initiatives focused on
            enhancing digital security measures.
          </p>
        </div>

        <div className="project-main-container">
          <div className="project-ul">
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    fontWeight:
                      selectedCategory === category ? "bold" : "normal",
                    backgroundColor:
                      selectedCategory === category ? "#0bbbbf" : "#149ddd",
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-list">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="project-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                {hoveredIndex === index && (
                  <div className="hover-text">
                    <a href={project.src} target="_blank" rel="noopener noreferrer">Click here to get source code</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
