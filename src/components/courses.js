import React from "react";
import '../hojas-de-estilo/courses.css';

function Curso(props){
    return(
        <div className="course-col">
        <h3 id="courseName">{props.name}</h3>
        <p>{props.description}</p>
      </div>
    )
}

export default Curso;