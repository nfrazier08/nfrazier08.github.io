import React from "react";
import ProjectCards from './ProjectCards';
import PortfolioContainer from './PortfolioContainer.css'


const ViewProjects = props =>

<div>

    <div className="row">
        <div className="col s12">
            <ProjectCards 
                title = {"Friend Finder"}
                link = {"https://ancient-taiga-69275.herokuapp.com/"}
            />
        </div>
    </div>
    
    <div className="row">
        <div className="col s12">
            <ProjectCards 
                title = {"Smoothie Mountain"}
                link = {"https://desolate-beyond-88163.herokuapp.com/"}         
            />
        </div>
    </div>

    
</div>


export default ViewProjects;
