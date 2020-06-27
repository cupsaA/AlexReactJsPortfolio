import React, {Component} from "react";
import classes from './ButtonDown.module.css'

class ButtonDown extends Component {

    render() {
        const shoot = () => {

            window.scroll({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        };

        return (
            <button onClick={shoot} className={classes.ButtonDown}>
                <i className="fa fa-chevron-circle-down fa-3x"></i>
            </button>
        )
    }
}

export default ButtonDown;