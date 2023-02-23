import logo from "../imagenes/logo.png";
import "../hojas-de-estilo/header.css";
import { useEffect, useRef } from "react";

function Header() {
  let header = useRef();
  console.log(header);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        header.current.classList.remove("header--transparent");
      } else {
        header.current.classList.add("header--transparent");
      }
    });
  }, []);




  let scrolledLogo = useRef();
  console.log(logo);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        scrolledLogo.current.classList.add("scrolled-navbar-logo");
      } else {
        scrolledLogo.current.classList.remove("scrolled-navbar-logo");
      }
    });
  }, []);






  return (
    <header ref={header} className="header header--transparent">
      <nav id="navbar">
        <a href="index.html">
          {" "}
          <img ref={scrolledLogo} src={logo} alt="restaurant logo" />
        </a>
        <div className="nav-links" id="navLinks">
        <ul>
              <li>
                <a href="#courses">COURSES</a>
              </li>
              <li>
                <a href="#locations">LOCATIONS</a>
              </li>
              <li>
                <a href="#recipies">BEST RECIPIES</a>
              </li>
              <li>
                <a href="#reviews">TESTIMONIALS</a>
              </li>
              <li>
                <a href="#about">ABOUT US</a>
              </li>
            </ul>
        </div>
        {/* MENU MOBILE */}

        <button
          className="button-hamburger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobile-menu"
          aria-controls="mobile-menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className="offcanvas offcanvas-end header-menu-mobile"
          tabindex="-1"
          id="mobile-menu"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body mobile-menu-opened">
            <ul>
              <li>
                <a href="#courses">COURSES</a>
              </li>
              <li>
                <a href="#locations">LOCATIONS</a>
              </li>
              <li>
                <a href="#recipies">BEST RECIPIES</a>
              </li>
              <li>
                <a href="#reviews">TESTIMONIALS</a>
              </li>
              <li>
                <a href="#about">ABOUT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
