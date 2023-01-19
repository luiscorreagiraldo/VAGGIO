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

  return (
    <header ref={header} className="header header--transparent">
      <nav id="navbar">
        <a href="index.html">
          {" "}
          <img src={logo} alt="restaurant logo" />
        </a>
        <div className="nav-links" id="navLinks">
          <ul>
            <li>
              <a href="/">COURSES</a>
            </li>
            <li>
              <a href="/">LOCATIONS</a>
            </li>
            <li>
              <a href="/">BEST RECIPIES</a>
            </li>
            <li>
              <a href="/">TESTIMONIALS</a>
            </li>
            <li>
              <a href="/">ABOUT US</a>
            </li>
          </ul>
        </div>
        <button
          className="button-hamburger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobile-menu"
          aria-controls="mobile-menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
       {/* MENU MOBILE */}

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
          <div class="offcanvas-body">
          <ul>
            <li>
              <a href="/">COURSES</a>
            </li>
            <li>
              <a href="/">LOCATIONS</a>
            </li>
            <li>
              <a href="/">BEST RECIPIES</a>
            </li>
            <li>
              <a href="/">TESTIMONIALS</a>
            </li>
            <li>
              <a href="/">ABOUT US</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
