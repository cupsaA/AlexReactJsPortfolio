import React, {Component} from "react";
import classes from './ButtonUp.module.css'

class ButtonUp extends Component {

    render() {
        const shoot = () => {

            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        };

        return (
            <button onClick={shoot} className={classes.ButtonUp}>
                <i className="fa fa-chevron-circle-up fa-3x"></i>
            </button>
        )
    }
}

export default ButtonUp;