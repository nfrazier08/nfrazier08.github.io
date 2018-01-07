import React from "react";
import profilePicture from "./images/profile.JPG";
import './PortfolioContainer.css';
import Github from './images/if_github_287725.png';
import LinkedIn from "./images/if_linkedin_circle_black_107159.ico"

const PortfolioDashboard = props => 

    <div>
         
        <div className="row">
            <div className="col s1"></div>
            <div className= "col s11">
                <img src={profilePicture} className="responsive-img" id="mainPicture" alt="proPic" />
            </div>      
        </div>

        <div className="row">
            <div className="col s1"></div>
            <div className="col s12">
                <a href="https://github.com/nfrazier08"><img src={Github} className="App-logo" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/nicole-frazier/"><img src={LinkedIn} className="App-logo" alt="LinkedIn" /></a>
                <a href="mailto:nicolasaelf64@gmail.com" className="mail"><i class="medium material-icons icon-black">email</i></a>

            </div>

        </div>

        

    </div>



export default PortfolioDashboard;

