import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import Logo from '../../../../assets/react-logo.png'


class CardProject extends Component {
    render() {
        return (
            <Card className="bg-dark text-white">
                <Card.Img src={Logo}/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    }
}


export default CardProject;