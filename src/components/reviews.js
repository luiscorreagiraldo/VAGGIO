import React from "react";
import "../hojas-de-estilo/reviews.css"

function Review(props) {
  return(
    <div className="reviews-col">
    <img
     src={require(`../imagenes/clients-images/person${props.reviewImage}.jpg`)} 
     alt="client"
     />
    <div>
      <h3 className="client">
        {props.name} <br />
        {props.lastName}
      </h3>
      <p>
        {props.reviewText}
      </p>
      <div className="clients-layer"></div>

      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>

    </div>
  </div>)
}
export default Review;