import React from "react";
import "../hojas-de-estilo/bestRecipies.css"


function Recipie (props){
    return(
<div className="recipie-col">
          <img 
          src={require(`../imagenes/recipies-images/recipie${props.recipeImage}.jpg`)} 
          alt="mejores recetas"
          />
          <div className="recipe-layer">
            <h3>{props.name}</h3>
          </div>
        </div>
    )
}

export default Recipie;