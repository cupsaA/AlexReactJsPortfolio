import React, {Component} from "react";
import CardProject from "./CardProject/CardProject";
import './Projects.css'
import Logo from '../../../assets/PortfolioImage.png'

class Projects extends Component {
    render() {
        return (
            <div className="projectPage" id="projects">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardProject projectImage={Logo} projectTtitle={'Personal Portfolio'}
                                         githubAddress={'https://github.com/cupsaA/AlexReactJsPortfolio'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;