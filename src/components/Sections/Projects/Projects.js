import React, {Component} from "react";
import CardProject from "./CardProject/CardProject";
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div className="projectPage">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardProject/>
                        </div>
                        <div className="col-md-4">
                            <CardProject/>
                        </div>
                        <div className="col-md-4">
                            <CardProject/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;