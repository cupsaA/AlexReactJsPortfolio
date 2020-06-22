import React, {Component} from 'react';
import {Card} from 'react-bootstrap'

class CardStack extends Component {
    render() {
        return (
            <Card style={{width: '15rem' }}>
                <Card.Img style={{ height:'11rem' }} variant="top" src={this.props.icon} alt='icon'/>
                <Card.Body>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardStack;