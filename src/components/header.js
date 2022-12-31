import React from "react";
import "../hojas-de-estilo/header.css"
import logo from "../imagenes/logo.png"

function Header() {

    return(


      
    <section className="header">
            <nav>
               <a href="index.html"> <img src={logo} alt='restaurant logo' /></a>
               <div className="nav-links" id="navLinks">
                  <i className="fa-solid fa-xmark" onClick="hideMenu()"></i>

                  <ul>
                     <li><a href="">HOME</a></li>
                     <li><a href="#courses">COURSES</a></li>
                     <li><a href="#locations">LOCATIONS</a></li>
                     <li><a href="#recipies">BEST RECIPIES</a></li>
                     <li><a href="#reviews">REVIEWS</a></li>
                     <li><a href="#about">ABOUT US</a></li>

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