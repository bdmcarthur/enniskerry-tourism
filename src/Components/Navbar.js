import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand ml-4" href="/">
        <img alt="logo" src="/images/logo.png"></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          {/* <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            About
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">
              Stay
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li> */}
          <li class="nav-item">
            <a class="nav-link " href="/stay">
              Stay<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/eat">
              Eat
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/see">
              See
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/news">
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
