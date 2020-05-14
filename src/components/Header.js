import React from "react";
import NavTabs from "./NavTabs";

function Header() {
  return (
    <React.Fragment>
      <header class="top-container">
        <div class="header-container row">
          <h1 class="teal-header column column--mobile">Ruben Burrell</h1>
            <NavTabs />
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;