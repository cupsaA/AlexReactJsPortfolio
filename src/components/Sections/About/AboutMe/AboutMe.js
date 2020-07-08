import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        return (
            <p style={{fontSize : '15px', width: '500px'}}>
                {this.props.description}
            </p>
        );
    }
}

export default AboutMe;