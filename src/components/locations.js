import React from "react";
import "../hojas-de-estilo/locations.css"



function Location (props){
    return(
        <div className="location-col">
        <img
        src={require(`../imagenes/locations-images/img${props.locationImage}.jpg`)}
         alt="location"
         />
        <div className="layer">
          <h3>{props.location}</h3>
        </div>
      </div>
    )
}

export default Location