import React from "react";

const projects = [
  {
    title: "Burger Logger",
    deployedlink: "https://radiant-scrubland-22505.herokuapp.com/",
    repolink: "https://github.com/Gurren828/burger",
    image: "assets/images/burger-logger-preview.png"
  },
  {
    title: "Fitness App",
    deployedlink: "https://day-30-challenge.herokuapp.com/",
    repolink: "https://github.com/kberner14/30-Days",
    image: "assets/images/fitness-app-preview.png"
  },
  {
    title: "Employee Tracker",
    deployedlink: "assets/images/employee-tracker-preview.png",
    repolink: "https://github.com/Gurren828/mysql-mployee-tracker",
    image: "assets/images/employee-tracker-preview.png"
  }
];

function Project() {
  return (
    <React.Fragment>
      {projects.map(project => (
        <section class="feature column column--mobile">
          <a href={project.deployedlink}>
            <img src={project.image} alt={project.title} />
          </a>
          <div id="absolute">
            <strong>{project.title}</strong><a href={project.repolink}><img src="assets/images/github-icon.png" alt="GitHub icon" /></a>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
}

export default Project;