import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import Logo from '../../../../assets/react-logo.png'


class CardProject extends Component {
    render() {
        return (
            <Card style={{height: '15rem'}} className="bg-dark text-white">
                <Card.Img style={{height: '15rem'}} src={Logo}/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>
            </Card>
        );
    }
}


export default CardProject;