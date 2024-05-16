import React, { useState, useEffect } from 'react';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    'All',
    'Full Stack Projects',
    'React projects',
    'Cybersecurity projects',
    'Php Projects'
  ];

  const projects = [
    { title: 'Full Stack Project 1', category: 'Full Stack Projects' },
    { title: 'React Project 1', category: 'React projects' },
    { title: 'Cybersecurity Project 1', category: 'Cybersecurity projects' },
    { title: 'Php Project 1', category: 'Php Projects' },
    // Add more projects as needed
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className='project-main-container'>
          <div className='project-ul'>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    fontWeight: selectedCategory === category ? 'bold' : 'normal',
                    backgroundColor:selectedCategory === category ?"#0bbbbf":"#149ddd"
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              {hoveredIndex === index && <div className="hover-text">Click here to get source code</div>}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
