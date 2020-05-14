import React from "react";

function Home() {
  return (
    <div class="main-container">
        <h1 class="content-header">About Me</h1>
        <hr class="hr1" />
        <img class = "img-float" src="assets/images/profile.jpeg" alt="Placeholder" />
        <article>
            <p class="p1">Entrance level coder and recent graduate of the UCSD’s Coding Bootcamp with an drive to produce full stack applications. A self-motivated, creative and hardworking individual with a background in the Security sector.</p>
            <p class="p1">Knowledgeable in the following languages and technologies: JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, HTML5, CSS, MySQL, Git, and command line</p>
            <p class="p1">Check out the Projects tab for some examples of my work. :)</p>
        </article>
    </div>
  );
}

export default Home;