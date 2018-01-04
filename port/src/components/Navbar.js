import React from "react";
import Github from './images/if_github_287725.png';
import LinkedIn from "./images/if_linkedin_circle_black_107159.ico"

//Styling for the image icons is in App.css
const Navbar = props => 
    <nav>
        <div class="nav-wrapper">
            <a class="brand-logo center">Nicole E. Frazier</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="https://github.com/nfrazier08"><img src={Github} className="App-logo" alt="Github" /></a></li>
                    <li><a href="https://www.linkedin.com/in/nicole-frazier/"><img src={LinkedIn} className="App-logo" alt="LinkedIn" /></a></li>                    
                </ul>
        </div>
    </nav>

export default Navbar;