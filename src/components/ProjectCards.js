import React from "react"

//Project description will also be a prop

const ProjectCards = props =>
    <div>        

        <div className="row">
        <div className="col s12">
          <div className="card cyan lighten-5">
            <div className="card-content black-text">
              <span className="card-title">{props.title}</span>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="card-action black-text">
              <a href={props.link}>View Project</a>              
            </div>
          </div>
        </div>
      </div>

    </div>

export default ProjectCards