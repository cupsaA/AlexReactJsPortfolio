import React, {Component} from 'react';
import './CardProject.css'


class CardProject extends Component {
    render() {
        return (
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={this.props.projectImage} alt='Image 1' className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.projectTtitle}</h4>
                    <a href={this.props.githubAddress} target="_blank" className="btn btn-outline-success">Github</a>
                </div>
            </div>
        );
    }
}


export default CardProject;