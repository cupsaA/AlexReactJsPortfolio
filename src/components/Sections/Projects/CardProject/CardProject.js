import React, {Component} from 'react';
import './CardProject.css'
import Logo from '../../../../assets/react-logo.png';


class CardProject extends Component {
    render() {
        return (
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={Logo} alt='Image 1' className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">Card Ttile</h4>
                    <a href="#" className="btn btn-outline-success">Go Anywhere</a>
                </div>
            </div>
        );
    }
}


export default CardProject;