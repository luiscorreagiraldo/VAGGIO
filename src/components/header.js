import React from "react";
import "../hojas-de-estilo/header.css"

function Header() {

    return(
    <section className="header">
            <nav>
               <a href="index.html"> <img src="C:\Users\luisc\OneDrive\Escritorio\PROYECTOS\VAGGIO\src\imagenes\logo.png" alt='restaurant logo' /></a>
               <div className="nav-links" id="navLinks">
                  <i className="fa-solid fa-xmark" onclick="hideMenu()"></i>

                  <ul>
                     <li><a href="/">HOME</a></li>
                     <li><a href="/">ABOUT US</a></li>
                     <li><a href="/">COURSES</a></li>
                     <li><a href="/">RESERVATIONS</a></li>
                     <li><a href="/">CONTACT US</a></li>
                  </ul>
               </div>
               <i className="fa-solid fa-bars" onclick="showMenu()"></i>
            </nav>
            <div className="text-box">
               <h1>Your Favorite Restaurant</h1>
               <p>
                  The opportunity to meet and serve you is one we don´t take lighthly,
                  our favorite thing in the world is <br />
                  taking care of you. <br />
               </p>
               <p className="enrollP">
                  Now you can enroll to our new online cooking courses !
               </p>
               <a href="/" className="enroll">ENROLL NOW</a>
            </div>
         </section>
    )
}

export default Header;