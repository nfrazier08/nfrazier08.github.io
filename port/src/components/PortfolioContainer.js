import React, {Component} from "react";
import Navbar from "./Navbar";
import profilePicture from "./images/profile.JPG";
import './PortfolioContainer.css';
import About from './About';



class Portfolio extends Component {

    render(){
        return (
            <div>
                <Navbar />
                    <div className="row">
                        <div className="col 4">                            
                            <img src={profilePicture} className="responsive-img" id="mainPicture" alt="proPic" />
                        </div>

                        <div className="col s6">
                            <About />
                        </div>

                        <div className="col s2">
                            Resume Link
                            Project Links
                        </div>
                    </div>
            </div>
        )
    }
}

export default Portfolio;