import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand ml-4" href="/">
        <img
          alt="logo"
          className="w-25 d-none d-sm-block"
          src="/images/logo.png"
        ></img>
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
          <li class="nav-item mx-1">
            <a class="nav-link text-white" href="/about">
              About<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item mx-1 dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              To Do
            </a>
            <div
              class="dropdown-menu bg-dark border-0"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item text-white" href="/see">
                See
              </a>
              <a class="dropdown-item text-white " href="/shop">
                Shop
              </a>
              <a class="dropdown-item text-white " href="/health">
                Health and Beauty
              </a>
              <a class="dropdown-item text-white " href="/outdoor">
                Outdoors
              </a>
            </div>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link text-white " href="/stay">
              Stay<span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link text-white " href="/eat">
              Eat
            </a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link text-white " href="/news">
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
