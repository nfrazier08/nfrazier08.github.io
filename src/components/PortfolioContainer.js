import React, {Component} from "react";
import Navbar from "./Navbar";
// import profilePicture from "./images/profile.JPG";
// import backgroundImage from './images/bridge.jpg'
import './PortfolioContainer.css';
import About from './About';
// import ViewProjects from './ViewProjects';
import PortfolioDashboard from './PortfolioDashboard'
import MyProjects from './MyProjects';


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
                        
                            <MyProjects />
                            
                        </div>
                    </div>            
            </div>
        )
    }
}

export default Portfolio;