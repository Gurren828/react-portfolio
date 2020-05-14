import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <React.Fragment>
        <nav class="top-nav column column--mobile">
          <ul class="nav-container">
            <li>
              <Link to="/" className="link">
                About
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/projects" className="link">
                Projects
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li>|</li>
            <li>
              <a href="https://github.com/gurren828" className="link">
                GitHub
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="https://www.linkedin.com/in/ruben-burrell-77b50837/" className="link">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
    </React.Fragment>
  );
}

export default NavTabs;