import React from "react";
import "../hojas-de-estilo/banner.css"

function Banner() {

    return(


      
    <section className="banner">
            
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

export default Banner;