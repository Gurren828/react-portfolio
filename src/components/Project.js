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
  },
  {
    title: "Resume",
    deployedlink: "assets/resume.pdf",
    repolink: "assets/resume.pdf",
    image: "https://lh3.googleusercontent.com/proxy/doEXa6UWRTYc29hjwuLozEcU-bv1-n6UjHs4y-DCCIAE2XZ_00up2GW9Et9qP_5K3OyXtzjX_o8ZcuzP0fN_ITKRxxPsq287K0ruLprOXkKYZlNT4g"
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
            <strong>{project.title}</strong><a href={project.repolink}><img src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg" alt="GitHub icon" /></a>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
}

export default Project;