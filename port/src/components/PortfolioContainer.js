import React, {Component} from "react";
import Navbar from "./Navbar";
// import profilePicture from "./images/profile.JPG";
import './PortfolioContainer.css';
import About from './About';
import ViewProjects from './ViewProjects';
import PortfolioDashboard from './PortfolioDashboard'


class Portfolio extends Component {

    render(){
        return (
            <div>
                <Navbar />
                    <div className="row">
                        <div className="col 3">                           
                            <PortfolioDashboard />
                        </div>

                        <div className="col s5">
                            <About />
                        </div>

                        <div className="col s4">
                        <div className="row">
                            <h4>View Projects</h4>
                        </div>
                            <ViewProjects />
                            
                        </div>
                    </div>
            </div>
        )
    }
}

export default Portfolio;