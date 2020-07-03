import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        return (
            <p>
                {this.props.description}
            </p>
        );
    }
}

export default AboutMe;